import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { UserPageComponent } from './user-page/user-page.component';
import {UserRoutingModule} from 'src/app/user/user-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {UsersService, REST_URL}  from './users.service';
import {UserModel} from 'src/app/user/user.model';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [SearchComponent, UserPageComponent, UsersComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    UserRoutingModule
  ],
  exports:[SearchComponent, UserPageComponent, UsersComponent],
  providers:[UserModel, UsersService, {provide: REST_URL, useValue: 'http://localhost:4200/api/users'}]
})
export class UserModule { }
