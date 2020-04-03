import { Component, OnInit, OnDestroy } from '@angular/core';
import {IUser} from 'src/app/user/user';
import { UserModel } from '../user.model';
import {ActivatedRoute} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.css']
})
export class UserFriendsComponent implements OnInit, OnDestroy {

  userFriends: IUser[];
  username:string;
  subscription: Subscription;

  constructor(private userModel: UserModel, private route: ActivatedRoute) { }

  ngOnInit() {

    let username = this.userModel.displayedUser.username;

    this. subscription = this.userModel.getUserFriends(username).subscribe(
    
      data => this.userFriends = data


    );

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
