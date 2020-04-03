import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SearchComponent = class SearchComponent {
    // @Output() setFilter = new EventEmitter<string>();
    // filter: string = '';
    constructor(userModel, router) {
        this.userModel = userModel;
        this.router = router;
        this.searchedUsers = new Array();
    }
    ngOnInit() {
    }
    searchUsers(searchTerm) {
        this.userModel.getUsersBySearchTerm(searchTerm).subscribe(data => this.searchedUsers = data);
    }
};
SearchComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css']
    })
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map