import { Component, OnInit } from '@angular/core';
import {IUser} from 'src/app/user/user';
import {UserModel} from 'src/app/user/user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // user:IUser;

  userInfo: string[];

  constructor(private userModel: UserModel, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     
    let username = this.route.snapshot.params['username'];

    // this.userModel.getUserByUsername(username).subscribe(data => this.user = data);
    this.userModel.getUserInfo(username).subscribe(data => this.userInfo = data);

     }

    

}
