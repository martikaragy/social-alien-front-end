import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserDetailsComponent = class UserDetailsComponent {
    constructor(userModel, route, router) {
        this.userModel = userModel;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        let username = this.route.snapshot.params['username'];
        this.userModel.getUserByUsername(username).subscribe(data => {
            console.log('subscribe for user');
            this.user = data;
            this.userModel.displayUserInfoSearchTerm = username;
            this.userModel.displayedUser = this.user;
        });
        this.userModel.getUserInfo(username).subscribe(data => {
            console.log('subscribe for info');
            this.userInfo = data;
        });
    }
};
UserDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-details',
        templateUrl: './user-details.component.html',
        styleUrls: ['./user-details.component.css']
    })
], UserDetailsComponent);
export { UserDetailsComponent };
//# sourceMappingURL=user-details.component.js.map