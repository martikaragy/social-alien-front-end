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

  currentUser:IUser;


  constructor(private userModel: UserModel, private router: Router) {
    
    // this.userModel.login(undefined, undefined).subscribe(requestedUser => {
    //   if (requestedUser) {
    //     this.userModel.setAuthenticated (true);
    //   } else {
    //     this.userModel.setAuthenticated(false);
    //   }; this.user = requestedUser; console.log(this.user);
    // })
  }

  ngOnInit() {
    this.userModel.getAuthenticatedUser().subscribe(data => {this.currentUser = data; console.log('receive data')});
  }

  logout(){
    this.userModel.logout().subscribe(response => this.router.navigate['/']);
  }

}
