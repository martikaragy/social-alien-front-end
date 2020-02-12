import { Injectable, OnInit } from "@angular/core";
import {IUser} from 'src/app/shared/interfaces/user';
import {UsersService} from './users.service';


@Injectable({
    providedIn:'root'
})
export class UserModel {
   private users: IUser[];
   private locator = (u:IUser, id: number) => u.id = id;

   constructor(private usersService: UsersService){
    this.usersService.loadUsers().subscribe(data => this.users = data);
   }

   getUsers(): IUser[]{
    return this.users;
   }

   getUser(id:number): IUser {
       return this.users.find(u => this.locator(u, id));
   }

}