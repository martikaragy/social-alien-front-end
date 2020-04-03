import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Subject, of } from "rxjs";
let MessageService = class MessageService {
    constructor() {
        this.subject = new Subject();
        //  private handler: (m: Message) => void; 
        //  reportMessage(msg: Message) { 
        //      if (this.handler != null) {
        //           this.handler(msg); 
        //         } 
        //     } 
        //  registerMessageHandler(handler: (m: Message) => void) {
        //       this.handler = handler;
        //      }
    }
    reportMessage(msg) {
        this.subject.next(msg);
    }
    get messages() {
        return this.subject;
    }
    confirm(message) {
        const confirmation = window.confirm(message || 'Is it OK?');
        return of(confirmation);
    }
    ;
};
MessageService = tslib_1.__decorate([
    Injectable()
], MessageService);
export { MessageService };
//# sourceMappingURL=message.service.js.map