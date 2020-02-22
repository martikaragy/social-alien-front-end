import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/user/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userModel: UserModel, private router: Router) { }

  ngOnInit() {
  }

  login(usernameInput: string, passwordInput: string){

  
    this.userModel.login(usernameInput, passwordInput)
    .subscribe(user => {
      if (user) {
          this.userModel.setAuthenticated(true);
          this.userModel.currentUser = user;
          this.router.navigateByUrl('/'); 
      } else {
        this.userModel.setAuthenticated(true);
        this.router.navigateByUrl('/notfound'); 
      }
    });
    

  }


}
