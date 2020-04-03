import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NavComponent = class NavComponent {
    constructor(userModel, router) {
        this.userModel = userModel;
        this.router = router;
    }
    get currentUser() {
        return this.userModel.currentUser;
    }
    ngOnInit() {
        this.userModel.getAuthenticatedUser().subscribe();
    }
    logout() {
        this.userModel.logout().subscribe(user => console.log(), (error) => {
            if (error.message === "Http failure response for http://localhost:4200/api/user: 401 Unauthorized") {
                this.userModel.currentUser = null;
                this.router.navigate['/'];
            }
        });
    }
};
NavComponent = tslib_1.__decorate([
    Component({
        selector: 'app-nav',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.css']
    })
], NavComponent);
export { NavComponent };
//# sourceMappingURL=nav.component.js.map