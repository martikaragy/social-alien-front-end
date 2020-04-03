import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProfilePageComponent = class ProfilePageComponent {
    constructor(userModel) {
        this.userModel = userModel;
    }
    ngOnInit() {
        console.log('profile page comp oninit');
        this.selectedUser = this.userModel.displayedUser;
        console.log(this.selectedUser);
    }
};
ProfilePageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-profile-page',
        templateUrl: './profile-page.component.html',
        styleUrls: ['./profile-page.component.css']
    })
], ProfilePageComponent);
export { ProfilePageComponent };
//# sourceMappingURL=profile-page.component.js.map