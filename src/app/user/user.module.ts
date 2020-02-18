import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {HttpClientModule} from '@angular/common/http'
import {UsersService, URL_USERS, URL_LOGIN}  from './users.service';
import {UserModel} from 'src/app/user/user.model';
import {RouterModule} from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';

@NgModule({
  declarations: [SearchComponent, ProfilePageComponent, UserDetailsComponent, UserFriendsComponent, UserRequestsComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    NgbModule
  ],
  exports:[SearchComponent, ProfilePageComponent, UserDetailsComponent, UserFriendsComponent],
  providers:[
    UserModel,
     UsersService,
      {provide: URL_USERS, useValue: 'http://localhost:4200/api/users'},
      {provide: URL_LOGIN, useValue: 'http://localhost:4200/api/login'},
    ]
})
export class UserModule { }
