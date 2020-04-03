import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserRequestsComponent = class UserRequestsComponent {
    constructor(userModel, route) {
        this.userModel = userModel;
        this.route = route;
    }
    ngOnInit() {
        let username = this.route.snapshot.params['username'];
        this.userModel.getPeopleRequestingFriendship(username).subscribe(data => this.usersRequestingFrendship = data);
    }
};
UserRequestsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-requests',
        templateUrl: './user-requests.component.html',
        styleUrls: ['./user-requests.component.css']
    })
], UserRequestsComponent);
export { UserRequestsComponent };
//# sourceMappingURL=user-requests.component.js.map