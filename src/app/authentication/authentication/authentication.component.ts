import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/user/user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  currentUser: IUser;

  constructor() { 

  }

  ngOnInit() {
  }

}
