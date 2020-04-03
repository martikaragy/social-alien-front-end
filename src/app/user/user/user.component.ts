import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserModel } from '../user.model';
import {IUser} from '../user';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private route: ActivatedRoute, private userModel:UserModel){}

  ngOnInit(){
    
    this.subscription = this.route.data.subscribe((data) => {

      this.userModel.displayedUser = data.selected;
      
     });
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
