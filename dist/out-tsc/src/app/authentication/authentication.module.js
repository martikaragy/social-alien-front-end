import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationRoutingModule } from 'src/app/authentication/authentication-routing.module';
import { FormsModule } from '@angular/forms';
import { PasswordMatchDirective } from './password-match.directive';
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = tslib_1.__decorate([
    NgModule({
        declarations: [LoginComponent, RegisterComponent, AuthenticationComponent, PasswordMatchDirective],
        imports: [
            CommonModule,
            NgbModule,
            FormsModule,
            AuthenticationRoutingModule
        ],
        exports: [LoginComponent, RegisterComponent, AuthenticationComponent]
    })
], AuthenticationModule);
export { AuthenticationModule };
//# sourceMappingURL=authentication.module.js.map