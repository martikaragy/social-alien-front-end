import { Component, OnInit } from '@angular/core';
import {UserModel} from  'src/app/user/user.model';
import {Router} from '@angular/router';
import { IUser } from 'src/app/user/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // currentUser:IUser;

  get currentUser(){
    console.log('in get cur user');
    console.log(this.userModel.currentUser);
    return this.userModel.currentUser;
  }
  
  constructor(private userModel: UserModel, private router: Router) {
  
  }

  ngOnInit() {
    // this.userModel.getAuthenticatedUser().subscribe(data => {this.currentUser = data});
    // this.currentUser = this.userModel.currentUser;
  }

  logout(){
    this.userModel.logout().subscribe(this.router.navigate['/'], this.userModel.currentUser = null);
  }

}
