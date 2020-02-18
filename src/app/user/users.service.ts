import {Injectable, Inject, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from 'src/app/user/user';
import { Observable } from 'rxjs';

export const URL_USERS = new InjectionToken("url_users");
export const URL_LOGIN = new InjectionToken("url_login");

@Injectable({
    providedIn:'root'
})

export class UsersService{

    constructor(
        private http:HttpClient, 
        @Inject(URL_USERS) private urlUsers: string,
        @Inject(URL_LOGIN) private urlLogin: string){ }

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
 
        return this.http.post<IUser>(this.urlLogin, {username, password});
         
        }
         
    // updateProduct(product: Product): Observable<Product> {
        
    // return this.http.put<Product>(`${this.url}/${product.id}`, product);
        
    // }
        
    // deleteProduct(id: number): Observable<Product> {
        
    // return this.http.delete<Product>(`${this.url}/${id}`);
        
    // }

}