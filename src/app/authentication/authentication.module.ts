import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {AuthenticationRoutingModule} from 'src/app/authentication/authentication-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    AuthenticationRoutingModule
  ],
  exports:[LoginComponent, RegisterComponent, AuthenticationComponent]
})
export class AuthenticationModule { }