import { Component, OnInit } from '@angular/core';
import {IUser} from 'src/app/user/user';
import { UserModel } from '../user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent implements OnInit {

  usersRequestingFrendship: IUser[];
  username: string;

  constructor(private userModel: UserModel, private route: ActivatedRoute) { }

  ngOnInit() {

    let username = this.userModel.displayedUser.username;
    this.userModel.getPeopleRequestingFriendship(username).subscribe(data => this.usersRequestingFrendship = data);
  }

}
