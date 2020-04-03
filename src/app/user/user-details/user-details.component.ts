import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserModel} from 'src/app/user/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  username: string;
  userInfo: string[];
  user: IUser;
  subscription: Subscription;

  constructor(private userModel: UserModel, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     
    this.username = (<IUser> this.userModel.displayedUser).username;
    this.subscription = this.userModel.getUserInfo(this.username).subscribe(data => this.userInfo = data);

     }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
