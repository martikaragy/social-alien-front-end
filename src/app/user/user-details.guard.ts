import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators'; 
import {UserModel} from './user.model';
import { IUser } from './user';
import {Router, ParamMap} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsGuard implements CanActivate{


  constructor(private userModel:UserModel, private router: Router, private route: ActivatedRoute){}


  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot)   : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      let username = next.params['username'];
      console.log('in can activate: ' + username);
      let loggedUser:IUser;
      loggedUser = this.userModel.currentUser;
      const redirect: UrlTree = this.router.parseUrl('/notfound');
      if(loggedUser === null){
        console.log('logged user is null');
        return false;
      }else{
        if(loggedUser.username !== username){
          console.log('username incorrect');
          return false;
        }
        console.log('all ok');
        return true;
      }

    }

    
  
}
