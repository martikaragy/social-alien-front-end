import {Injectable, Inject, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from 'src/app/user/user';
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

export const URL_USERS = new InjectionToken("url_users");
export const URL_AUTHENTICATE = new InjectionToken("url_authenticate");
export const URL_LOGOUT = new InjectionToken("url_logout");

@Injectable({
    providedIn:'root'
})

export class UsersDataSource{

    constructor(
        private http:HttpClient, 
        @Inject(URL_USERS) private urlUsers: string,
        @Inject(URL_AUTHENTICATE) private urlAuth: string,
        @Inject(URL_LOGOUT) private urlLogout: string){ }

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
//delete
    loginTest(username: string, password: string){

        const headers = new HttpHeaders({username, password}? {
            Authorization : 'Basic ' + btoa(username + ':' + password)} : {});

        return this.http.get(this.urlAuth, {headers: headers});
    }

    sendLogoutRequest(){
        return this.http.post(this.urlLogout,{});
    }

    sengAuthenticationGetRequest(){
        return this.http.get<IUser>(this.urlAuth);
    }

    sendPostUserRequest(firstName: string, lastName: string, email: string, username: string, password: string, passwordConfirmation:string ){
        console.log('in datasource');
        var newUser = {username, password, passwordConfirmation, firstName, lastName, email}
        return this.http.post(this.urlUsers,newUser);
    }
         


}