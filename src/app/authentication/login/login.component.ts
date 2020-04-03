import { Component, OnInit, Output, EventEmitter, InjectionToken, Inject } from '@angular/core';
import { UserModel } from 'src/app/user/user.model';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

export const URL = new InjectionToken("url");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  errorMessage: string;

  constructor(private userModel: UserModel, private router: Router, @Inject(URL) private urlAuth: string, private fb:FormBuilder) {
    
     this.loginForm = fb.group({
        usernameControl:["",Validators.compose([Validators.required, Validators.minLength(3)])],
        passwordControl:["", Validators.compose([Validators.required, Validators.minLength(3)])]
     })

     console.log(this.loginForm);

  }

  ngOnInit() {
  }

  login(usernameInput: string, passwordInput: string){

  
    this.userModel.login(usernameInput, passwordInput)
    .subscribe(user => {
      if (user) {
          this.userModel.currentUser = user;
          this.router.navigateByUrl('/'); 
      }
    },
    (error: Error) => {
      if(error.message === "Http failure response for " + this.urlAuth + ": 401 Unauthorized"){
        this.errorMessage = 'Cannot find user with such username or password!'; 
      }else{
        this.errorMessage = "Some kind of error happend.";
      }
    }
    
    
    );
    

  }


}
