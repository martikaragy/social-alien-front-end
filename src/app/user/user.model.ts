import { Injectable, OnInit } from "@angular/core";
import {IUser} from 'src/app/user/user';
import {UsersService} from './users.service';
import {Observable} from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class UserModel {
   

   constructor(private usersService: UsersService){

   }

   getUsers(): Observable<IUser[]>{
    return this.usersService.loadUsers();
   }

   getUserByUsername(username: string){
       return this.usersService.loadUserByUsername(username);
   }

   getUserFriends(username: string): Observable<IUser[]>{
    return this.usersService.loadUserFriends(username);
   }

   getPeopleRequestingFriendship(username: string): Observable<IUser[]>{
       return this.usersService.loadPeopleRequestingFriendship(username);
   }

   login(username: string, password: string): Observable<IUser>{
       return this.usersService.sendLoginRequest(username,password);
   }





}