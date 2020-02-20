import {Injectable, Inject, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from 'src/app/user/user';
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

export const URL_USERS = new InjectionToken("url_users");
export const URL_AUTH = new InjectionToken("url_auth");

@Injectable({
    providedIn:'root'
})

export class UsersDataSource{

    constructor(
        private http:HttpClient, 
        @Inject(URL_USERS) private urlUsers: string,
        @Inject(URL_AUTH) private urlAuth: string){ }

    loadUsers(): Observable<IUser[]>{
       return this.http.get<IUser[]>(this.urlUsers);
   }

   loadUserByUsername(username:string): Observable<IUser>{
    return this.http.get<IUser>(this.urlUsers +'/' + username);
}

    loadUserFriends(username:string): Observable<IUser[]>{
        return this.http.get<IUser[]>(this.urlUsers +'/' + username +  '/connections/friends');
    }

    loadPeopleRequestingFriendship(username:string): Observable<IUser[]>{
        return this.http.get<IUser[]>(this.urlUsers +'/' + username +  '/connections/requests');
    }

    sendLoginRequest(username: string, password: string): Observable<IUser> {

        const headers = new HttpHeaders({username, password}? {
            Authorization : 'Basic ' + btoa(username + ':' + password)} : {});

        return this.http.get<IUser>(this.urlAuth, {headers: headers});
    }

    sengAuthenticationGetRequest(){
        return this.http.get<IUser>(this.urlAuth);
    }
         


}