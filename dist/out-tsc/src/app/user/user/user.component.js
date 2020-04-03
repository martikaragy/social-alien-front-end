import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
let UserComponent = class UserComponent {
    constructor(route, userModel) {
        this.route = route;
        this.userModel = userModel;
    }
    ngOnInit() {
        console.log('in user component oninit');
        this.route.data.pipe(map(data => data))
            .subscribe((user) => this.userModel.displayedUser = user);
        console.log('again in user component: ' + this.userModel.displayedUser);
    }
};
UserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map