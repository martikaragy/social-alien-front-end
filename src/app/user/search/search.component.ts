import { Component, OnInit } from '@angular/core';
import {UserModel} from 'src/app/user/user.model';
import {Router} from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  get users() {
    return this.userModel.getUsers();
  }

  constructor(private userModel: UserModel, private router: Router) { }

  ngOnInit() {
    
  }

  navigateToProfilePage(username: string){
    console.log('navigation active');
    console.log(username);
    this.router.navigate(['/users/' + username]);
  }


}
