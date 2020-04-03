// import { ErrorHandler, Injectable, NgZone } from "@angular/core";
// import { MessageService } from 'src/app/core/messages/message.service';
// import { Message } from 'src/app/core/messages/message.model';
// import * as tslib_1 from "tslib"

// @Injectable()
// export class MessageErrorHandler implements ErrorHandler { 

//     constructor(private messageService: MessageService, private ngZone: NgZone) { } 
    
//     handleError(error) {

//          let msg = error instanceof Error ? error.message : error.toString();

//          this.ngZone.run(() => this.messageService .reportMessage(new Message(msg, true)), 0);


//     }
// }