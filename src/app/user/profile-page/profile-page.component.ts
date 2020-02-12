import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import {UserModel} from 'src/app/user/user.model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user:IUser;

  constructor(private userModel: UserModel, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     
    let username = this.route.snapshot.params['username'];

    this.user = this.userModel.getUser(username);

     }
  

}
