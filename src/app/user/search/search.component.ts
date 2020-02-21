import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {UserModel} from 'src/app/user/user.model';
import {Router} from '@angular/router';
import {IUser} from 'src/app/user/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchedUsers:IUser[] = new Array<IUser>();
  // allUsers: IUser[] = new Array<IUser>();

  // get searchedUsers(){
  //   let users:IUser[];
  //   this.userModel.getUserBySerachTerm(this.filter).subscribe(data=>users=data);
  //   return users;
  // }

  @Output() setFilter = new EventEmitter<string>();
  filter: string = '';

  constructor(private userModel: UserModel, private router: Router) {}

  ngOnInit(){
    //  this.userModel.getUsers().subscribe(data => this.allUsers = data);
  }

  searchUsers(searchTerm: string){
    this.userModel.getUsersBySearchTerm(searchTerm).subscribe(data => this.searchedUsers=data);
  }

  changeFilter(userFilter: string){
    this.setFilter.emit(userFilter);
    this.filter = userFilter;
    // this.searchedUsers = this.filterUsers();
      }

//   filterUsers(){
//     return this.allUsers. filter(u => 
//     u.username === this.filter || 
//     u.firstName === this.filter || 
//     u.lastName === this.filter || 
//     u.email.slice(0,u.email.indexOf('@')).includes(this.filter)) ;
// }






}
