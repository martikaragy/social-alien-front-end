import { Component, OnInit } from '@angular/core';
import {IUser} from 'src/app/user/user';
import { UserModel } from '../user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.css']
})
export class UserFriendsComponent implements OnInit {

  userFriends: IUser[];

  constructor(private userModel: UserModel, private route: ActivatedRoute) { }

  ngOnInit() {

    let username = this.route.snapshot.params['username'];
    this.userModel.getUserFriends(username).subscribe(data => this.userFriends = data);
  }

}
