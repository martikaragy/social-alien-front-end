import * as tslib_1 from "tslib";
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
export const URL_USERS = new InjectionToken("url_users");
export const URL_AUTHENTICATE = new InjectionToken("url_authenticate");
export const URL_LOGOUT = new InjectionToken("url_logout");
export const URL_SEARCH_USERS = new InjectionToken("url_search_users");
let UsersDataSource = class UsersDataSource {
    constructor(http, urlUsers, urlAuth, urlLogout, urlSearchUsers) {
        this.http = http;
        this.urlUsers = urlUsers;
        this.urlAuth = urlAuth;
        this.urlLogout = urlLogout;
        this.urlSearchUsers = urlSearchUsers;
    }
    loadUsers() {
        return this.http.get(this.urlUsers);
    }
    loadUserByUsername(username) {
        return this.http.get(this.urlUsers + '/' + username);
    }
    loadUserInfo(username) {
        return this.http.get(this.urlUsers + '/' + username + '/show/info');
    }
    loadUserFriends(username) {
        return this.http.get(this.urlUsers + '/' + username + '/connections/friends');
    }
    loadPeopleRequestingFriendship(username) {
        return this.http.get(this.urlUsers + '/' + username + '/connections/requests');
    }
    sendLoginRequest(username, password) {
        const headers = new HttpHeaders({ username, password } ? {
            Authorization: 'Basic ' + btoa(username + ':' + password)
        } : {});
        return this.http.get(this.urlAuth, { headers: headers });
    }
    sendLogoutRequest(username, password) {
        const headers = new HttpHeaders({ username, password } ? {
            Authorization: 'Basic ' + btoa(username + ':' + password)
        } : {});
        return this.http.get(this.urlAuth, { headers: headers });
        // .pipe(
        //     catchError(this.handleError)
        //   );
    }
    sengAuthenticationGetRequest() {
        return this.http.get(this.urlAuth);
    }
    sendSearchUsersRequest(searchTerm) {
        return this.http.get(this.urlSearchUsers + searchTerm);
    }
    sendPostUserRequest(firstName, lastName, email, username, password, passwordConfirmation) {
        var newUser = { username, password, passwordConfirmation, firstName, lastName, email };
        return this.http.post(this.urlUsers, newUser);
    }
};
UsersDataSource = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(1, Inject(URL_USERS)),
    tslib_1.__param(2, Inject(URL_AUTHENTICATE)),
    tslib_1.__param(3, Inject(URL_LOGOUT)),
    tslib_1.__param(4, Inject(URL_SEARCH_USERS))
], UsersDataSource);
export { UsersDataSource };
//# sourceMappingURL=users.datasource.js.map