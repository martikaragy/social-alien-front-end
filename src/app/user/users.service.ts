import {Injectable, Inject, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from 'src/app/shared/interfaces/user';
import { Observable } from 'rxjs';

export const REST_URL = new InjectionToken("url");

@Injectable({
    providedIn:'root'
})

export class UsersService{

    constructor(private http:HttpClient, @Inject(REST_URL) private url: string){
   }

    loadUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url);
   }

}