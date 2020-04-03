import { Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from "@angular/router";
import { Observable, EMPTY, of } from "rxjs";
import {take, mergeMap} from 'rxjs/operators';
import { UserModel } from '../user.model';
import { MessageService } from 'src/app/core/messages/message.service';
import {Message} from 'src/app/core/messages/message.model';
import {IUser} from '../user';


@Injectable()
export class ProfilePageResolver implements Resolve<IUser> { 
    
    constructor(private userModel: UserModel, private messageService: MessageService, private router: Router) { } 
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser>{ 

        let username = route.firstChild.params['username'];

        if(this.userModel.displayedUser === null){
            console.log('in resolver: fetching selected user from server');
            return this.userModel.getUserByUsername(username);
        }else{
            console.log('in resolver: selected user is already shown');
            return null;
        }
           
    }
}