import { Injectable, OnInit } from "@angular/core";
import {IUser} from 'src/app/user/user';
import {UsersDataSource} from './users.datasource';
import {Observable} from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class UserModel {
   
   authenticated: boolean = false;
   currentUser: IUser = null;

   constructor(private dataSource: UsersDataSource){

   }

   getUsers(): Observable<IUser[]>{
    return this.dataSource.loadUsers();
   }

   getUserByUsername(username: string){
       return this.dataSource
.loadUserByUsername(username);
   }

   getUserFriends(username: string): Observable<IUser[]>{
    return this.dataSource.loadUserFriends(username);
   }

   getPeopleRequestingFriendship(username: string): Observable<IUser[]>{
       return this.dataSource
.loadPeopleRequestingFriendship(username);
   }

   login(username: string, password: string): Observable<IUser>{
       return this.dataSource
.sendLoginRequest(username,password);
   }

   logout(): Observable<IUser>{
    return this.dataSource
    .sendLoginRequest("",""); 
   }

   isAuthenticated(){
       return this.authenticated;
   }

   setAuthenticated(isAuthenticated: boolean){
       this.authenticated = isAuthenticated;
   }

   getAuthenticatedUser(){
    return this.dataSource.sengAuthenticationGetRequest();
}





}