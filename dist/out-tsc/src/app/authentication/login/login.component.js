import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(userModel, router) {
        this.userModel = userModel;
        this.router = router;
    }
    ngOnInit() {
    }
    login(usernameInput, passwordInput) {
        this.userModel.login(usernameInput, passwordInput)
            .subscribe(user => {
            if (user) {
                this.userModel.setAuthenticated(true);
                this.userModel.currentUser = user;
                this.router.navigateByUrl('/');
            }
            else {
                this.userModel.setAuthenticated(true);
                this.router.navigateByUrl('/notfound');
            }
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map