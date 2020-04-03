import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
let UserModel = class UserModel {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.authenticated = false;
        this.currentUser = null;
        this.displayedUser = null;
    }
    getUsers() {
        return this.dataSource.loadUsers();
    }
    getUserByUsername(username) {
        return this.dataSource.loadUserByUsername(username);
    }
    getUserInfo(username) {
        return this.dataSource.loadUserInfo(username);
    }
    getUserFriends(username) {
        return this.dataSource.loadUserFriends(username);
    }
    getPeopleRequestingFriendship(username) {
        return this.dataSource
            .loadPeopleRequestingFriendship(username);
    }
    login(username, password) {
        return this.dataSource.sendLoginRequest(username, password);
    }
    logout() {
        return this.dataSource.sendLogoutRequest("", "");
    }
    isAuthenticated() {
        return this.authenticated;
    }
    setAuthenticated(isAuthenticated) {
        this.authenticated = isAuthenticated;
    }
    getAuthenticatedUser() {
        return this.dataSource.sengAuthenticationGetRequest();
    }
    getUsersBySearchTerm(searchTerm) {
        return this.dataSource.sendSearchUsersRequest(searchTerm);
    }
    createUser(firstName, lastName, email, username, password, repeatPassword) {
        return this.dataSource.sendPostUserRequest(firstName, lastName, email, username, password, repeatPassword);
    }
};
UserModel = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserModel);
export { UserModel };
//# sourceMappingURL=user.model.js.map