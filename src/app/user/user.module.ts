import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {HttpClientModule} from '@angular/common/http'
import {UsersService, REST_URL}  from './users.service';
import {UserModel} from 'src/app/user/user.model';
import { UsersComponent } from './users/users.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SearchComponent, ProfilePageComponent, UsersComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  exports:[SearchComponent, ProfilePageComponent, UsersComponent],
  providers:[UserModel, UsersService, {provide: REST_URL, useValue: 'http://localhost:4200/api/users'}]
})
export class UserModule { }
