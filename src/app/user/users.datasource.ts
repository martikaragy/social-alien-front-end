import {Injectable, Inject, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from 'src/app/user/user';
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

export const URL_USERS = new InjectionToken("url_users");
export const URL_AUTHENTICATE = new InjectionToken("url_authenticate");
export const URL_LOGOUT = new InjectionToken("url_logout");
export const URL_SEARCH_USERS= new InjectionToken("url_search_users");

@Injectable({
    providedIn:'root'
})

export class UsersDataSource{

    constructor(
        private http:HttpClient, 
        @Inject(URL_USERS) private urlUsers: string,
        @Inject(URL_AUTHENTICATE) private urlAuth: string,
        @Inject(URL_LOGOUT) private urlLogout: string,
        @Inject(URL_SEARCH_USERS) private urlSearchUsers: string){ }

    loadUsers(): Observable<IUser[]>{
       return this.http.get<IUser[]>(this.urlUsers);
   }

   loadUserByUsername(username:string): Observable<IUser>{
    return this.http.get<IUser>(this.urlUsers +'/' + username);
}

    loadUserInfo(username: string): Observable<string[]>{
        return this.http.get<string[]>(this.urlUsers +'/' + username + '/show/info');
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

    sendLogoutRequest(){
        return this.http.post(this.urlLogout,{});
    }

    sengAuthenticationGetRequest(){
        return this.http.get<IUser>(this.urlAuth);
    }

    sendSearchUsersRequest(searchTerm: string): Observable<IUser[]>{
        return this.http.get<IUser[]>(this.urlSearchUsers + searchTerm);
    }

    sendPostUserRequest(firstName: string, lastName: string, email: string, username: string, password: string, passwordConfirmation:string ): Observable<IUser>{
        var newUser = {username, password, passwordConfirmation, firstName, lastName, email}
        return this.http.post<IUser>(this.urlUsers,newUser);
    }
         


}