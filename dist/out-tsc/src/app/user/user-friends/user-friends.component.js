import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserFriendsComponent = class UserFriendsComponent {
    constructor(userModel, route) {
        this.userModel = userModel;
        this.route = route;
    }
    ngOnInit() {
        let username = this.route.snapshot.params['username'];
        this.userModel.getUserFriends(username).subscribe(data => this.userFriends = data);
    }
};
UserFriendsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-friends',
        templateUrl: './user-friends.component.html',
        styleUrls: ['./user-friends.component.css']
    })
], UserFriendsComponent);
export { UserFriendsComponent };
//# sourceMappingURL=user-friends.component.js.map