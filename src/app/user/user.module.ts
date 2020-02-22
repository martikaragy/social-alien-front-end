import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {UsersDataSource, URL_USERS, URL_AUTHENTICATE, URL_LOGOUT,URL_SEARCH_USERS}  from './users.datasource';
import {UserModel} from 'src/app/user/user.model';
import {RouterModule} from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import {PostModule} from 'src/app/post/post.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [SearchComponent, ProfilePageComponent, UserDetailsComponent, UserFriendsComponent, UserRequestsComponent, EditComponent],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    PostModule
  ],
  exports:[SearchComponent, ProfilePageComponent, UserDetailsComponent, UserFriendsComponent],
  providers:[
    UserModel,
     UsersDataSource,
      {provide: URL_USERS, useValue: 'http://localhost:4200/api/users'},
      {provide: URL_AUTHENTICATE, useValue: 'http://localhost:4200/api/user'},
      {provide: URL_LOGOUT, useValue: 'http://localhost:4200/logout'},
      {provide: URL_SEARCH_USERS, useValue: 'http://localhost:4200/api/users/search/'},
    ]
})
export class UserModule { }
