import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {AuthenticationRoutingModule} from 'src/app/authentication/authentication-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {URL} from './login/login.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  exports:[LoginComponent, RegisterComponent, AuthenticationComponent],
  providers:[ {provide: URL, useValue: 'http://localhost:4200/api/user'}]
})
export class AuthenticationModule { }