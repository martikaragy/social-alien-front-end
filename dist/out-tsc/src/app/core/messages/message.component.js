import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let MessageComponent = class MessageComponent {
    constructor(messageService) {
        messageService.messages.subscribe(m => { console.log(JSON.stringify(m)); this.lastMessage = m; });
    }
};
MessageComponent = tslib_1.__decorate([
    Component({
        selector: "paMessages",
        templateUrl: "message.component.html",
    })
], MessageComponent);
export { MessageComponent };
//# sourceMappingURL=message.component.js.map