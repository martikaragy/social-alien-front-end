import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports:[LoginComponent, RegisterComponent]
})
export class CoreModule { }