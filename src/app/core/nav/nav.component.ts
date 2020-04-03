import { Component, OnInit, InjectionToken, Inject, OnDestroy } from '@angular/core';
import {UserModel} from  'src/app/user/user.model';
import {Router} from '@angular/router';
import { finalize } from 'rxjs/operators';
import { error } from 'protractor';
import { Subscription } from 'rxjs';

export const URL = new InjectionToken("url");


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  subscriptionGetUser: Subscription;
  subscriptionLogout: Subscription;

  get currentUser(){
    return this.userModel.currentUser;
  }
  
  constructor(private userModel: UserModel, private router: Router, @Inject(URL) private urlAuth: string) {
  
  }

  ngOnInit() {
     this. subscriptionGetUser = this.userModel.getAuthenticatedUser().subscribe();
  }

  ngOnDestroy(){
    this.subscriptionGetUser.unsubscribe();
    this.subscriptionLogout.unsubscribe();
  }

  logout(){
      this.subscriptionLogout = this.userModel.logout().subscribe(
        user => console.log(),
        (error: Error) => {
            if(error.message === "Http failure response for " + this.urlAuth + ": 401 Unauthorized"){
                this.userModel.currentUser = null;
                this.router.navigate['/'];
          }
        }
    );
  }



}
