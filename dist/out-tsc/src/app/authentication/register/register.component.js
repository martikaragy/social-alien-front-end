import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(userModel, router, route) {
        this.userModel = userModel;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    register(firstName, lastName, email, username, password, repeatPassword) {
        this.userModel.createUser(firstName, lastName, email, username, password, repeatPassword).subscribe(() => { this.router.navigate(['/'], { relativeTo: this.route.root }); });
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map