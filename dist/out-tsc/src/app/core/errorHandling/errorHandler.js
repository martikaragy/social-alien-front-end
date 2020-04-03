import * as tslib_2 from "tslib";
import { Injectable } from "@angular/core";
import { Message } from 'src/app/core/messages/message.model';
let MessageErrorHandler = class MessageErrorHandler {
    constructor(messageService, ngZone) {
        this.messageService = messageService;
        this.ngZone = ngZone;
    }
    handleError(error) {
        let msg = error instanceof Error ? error.message : error.toString();
        this.ngZone.run(() => this.messageService.reportMessage(new Message(msg, true)), 0);
    }
};
MessageErrorHandler = tslib_2.__decorate([
    Injectable()
], MessageErrorHandler);
export { MessageErrorHandler };
//# sourceMappingURL=errorHandler.js.map