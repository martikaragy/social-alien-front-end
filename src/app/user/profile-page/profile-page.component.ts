import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { IUser } from '../user';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

 selectedUser:IUser;

 constructor(private userModel:UserModel){}

 ngOnInit(){
   this.selectedUser = (<IUser> this.userModel.displayedUser);
 }

  

}
