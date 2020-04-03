import { Injectable, OnInit } from "@angular/core";
import {IUser} from 'src/app/user/user';
import {UsersDataSource} from './users.datasource';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Injectable({
    providedIn:'root'
})
export class UserModel {
   
   currentUser: IUser = null;
   displayedUser: IUser = null;


   constructor(private dataSource: UsersDataSource){

   }

   getUsers(): Observable<IUser[]>{
    return this.dataSource.loadUsers();
   }

   getUserByUsername(username: string): Observable<IUser>{
       return this.dataSource.loadUserByUsername(username);
   }

   getUserInfo(username: string): Observable <string[]>{
       return this.dataSource.loadUserInfo(username);
   }

   getUserFriends(username: string): Observable<IUser[]>{
    return this.dataSource.loadUserFriends(username);
   }

   getPeopleRequestingFriendship(username: string): Observable<IUser[]>{
       return this.dataSource
.loadPeopleRequestingFriendship(username);
   }

   login(username: string, password: string): Observable<IUser>{
       return this.dataSource.sendLoginRequest(username,password);
   }


   logout(): Observable<IUser>{
    return this.dataSource.sendLogoutRequest("",""); 
   }

   getAuthenticatedUser(){
    return this.dataSource.sengAuthenticationGetRequest();
    }

    getUsersBySearchTerm(searchTerm: string): Observable<IUser[]>{
        return this.dataSource.sendSearchUsersRequest(searchTerm);
    }

    createUser(firstName: string, lastName: string, email: string, username: string, password: string, repeatPassword:string ): Observable<IUser>{
       return this.dataSource.sendPostUserRequest(firstName,lastName,email,username,password,repeatPassword);
    }

    updateUser(username: string, firstName: string, lastName: string, email: string): Observable<IUser>{
        return this.dataSource.sendUpdateUserRequest(username, firstName, lastName, email);
    }





}