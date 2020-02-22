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

  // @Output() setFilter = new EventEmitter<string>();
  // filter: string = '';

  constructor(private userModel: UserModel, private router: Router) {}

  ngOnInit(){
  }

  searchUsers(searchTerm: string){
    this.userModel.getUsersBySearchTerm(searchTerm).subscribe(data => this.searchedUsers=data);
  }

  // changeFilter(userFilter: string){
  //   this.setFilter.emit(userFilter);
  //   this.filter = userFilter;
  //     }






}
