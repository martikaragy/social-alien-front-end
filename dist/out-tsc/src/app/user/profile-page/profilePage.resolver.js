import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
let ProfilePageResolver = class ProfilePageResolver {
    constructor(userModel, messageService, router) {
        this.userModel = userModel;
        this.messageService = messageService;
        this.router = router;
    }
    resolve(route, state) {
        let username = route.firstChild.params['username'];
        if (this.userModel.displayedUser === null) {
            console.log('in resolver: fetching selected user from server');
            return this.userModel.getUserByUsername(username);
        }
        else {
            console.log('in resolver: selected user is already shown');
            return null;
        }
    }
};
ProfilePageResolver = tslib_1.__decorate([
    Injectable()
], ProfilePageResolver);
export { ProfilePageResolver };
//# sourceMappingURL=profilePage.resolver.js.map