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

  @Output() provideUsername = new EventEmitter<string>();
  @Output() providePassword = new EventEmitter<string>();



  login(usernameInput: string, passwordInput: string, callback){


    // this.provideUsername.emit(usernameInput);
    // this.providePassword.emit(passwordInput);
    // this.userModel.login(usernameInput, passwordInput).subscribe(
    //   () => { this.router.navigate['/']});
    
    this.userModel.login(usernameInput, passwordInput)
    .subscribe(response => {
      if (response['name']) {
          this.userModel.changeAuthenticatedStatus(true);
      } else {
        this.userModel.changeAuthenticatedStatus(true);
      }
      this.router.navigateByUrl('/');  
    });
    return false;

  }
}
