import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/user/users.service'
import { IUser } from 'src/app/shared/interfaces/user';
import {UserModel} from 'src/app/user/user.model'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user:IUser;

  constructor(private userModel: UserModel, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['username'];

     }
  

}
