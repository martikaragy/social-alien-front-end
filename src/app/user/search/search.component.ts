import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import {UserModel} from 'src/app/user/user.model';
import {Router} from '@angular/router';
import {IUser} from 'src/app/user/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchedUsers:IUser[] = new Array<IUser>();
  subscription: Subscription;

  constructor(private userModel: UserModel, private router: Router) {}

  ngOnInit(){
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  searchUsers(searchTerm: string){
    this.subscription = this.userModel.getUsersBySearchTerm(searchTerm).subscribe(data => {this.searchedUsers=data});
  }







}
