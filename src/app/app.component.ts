import { Component } from '@angular/core';
import {UserModel} from './user/user.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  credentials = {username: '', password: ''};
  
  constructor(private user: UserModel, private http: HttpClient, private router: Router) {
    this.user.login(undefined, undefined).subscribe(response => {
      if (response['name']) {
        this.user.changeAuthenticatedStatus (true);
      } else {
        this.user.changeAuthenticatedStatus (false);
      }
    });
  }


  logout() {
    this.user.logout().subscribe(() => {
        this.user.changeAuthenticatedStatus (false);
        this.router.navigateByUrl('/login');
    });
  }

  



}
