import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserModel} from './user/user.model';
import { IUser } from './user/user';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsGuard implements CanActivateChild {


  constructor(private userModel:UserModel, private router: Router){}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let username = next.root.firstChild.params['username'];
      let loggedUser:IUser;
      loggedUser = this.userModel.currentUser;
      if(loggedUser == null){
        console.log('null');
        return false;
      }else{
        if(loggedUser.username !== username){
          return false;
        }
        return true;
      }

    }

    
  
}
