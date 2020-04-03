import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserDetailsGuard } from './user-details.guard';
import { EditComponent } from './edit/edit.component';
import { UserComponent } from './user/user.component';
import { ProfilePageResolver } from './profile-page/profilePage.resolver';
const routes = [
    {
        path: 'users',
        component: UserComponent,
        children: [
            {
                path: ':username',
                component: ProfilePageComponent,
            },
            {
                path: ':username/edit',
                component: EditComponent,
                canActivate: [UserDetailsGuard]
            }
        ],
        resolve: { selected: ProfilePageResolver }
    },
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], UserRoutingModule);
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map