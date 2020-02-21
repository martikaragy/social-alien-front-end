import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/user/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userModel: UserModel, private router:Router) { }

  ngOnInit() {
  }

  register(firstName: string, lastName: string, email: string, username: string, password: string, repeatPassword:string ){
    this.userModel.createUser(firstName, lastName, email, username, password, repeatPassword).subscribe(this.router.navigate['/']);
  }

}
