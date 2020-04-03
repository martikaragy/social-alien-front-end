import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UserDetailsGuard = class UserDetailsGuard {
    constructor(userModel, router, route) {
        this.userModel = userModel;
        this.router = router;
        this.route = route;
    }
    canActivate(next, state) {
        //  let username: string;
        //     this.route.paramMap.pipe(
        //       take(1),
        //       mergeMap(
        //         (params: ParamMap) => username = params.get('username')
        //         )
        //     );
        let username = next.params['username'];
        console.log('in can activate: ' + username);
        let loggedUser;
        loggedUser = this.userModel.currentUser;
        const redirect = this.router.parseUrl('/notfound');
        if (loggedUser === null) {
            console.log('logged user is null');
            return false;
        }
        else {
            if (loggedUser.username !== username) {
                console.log('username incorrect');
                return false;
            }
            console.log('all ok');
            return true;
        }
    }
};
UserDetailsGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserDetailsGuard);
export { UserDetailsGuard };
//# sourceMappingURL=user-details.guard.js.map