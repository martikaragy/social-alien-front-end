import * as tslib_1 from "tslib";
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { MessageService } from 'src/app/core/messages/message.service';
import { MessageErrorHandler } from 'src/app/core/errorHandling/errorHandler';
import { MessageComponent } from './messages/message.component';
let CoreModule = class CoreModule {
};
CoreModule = tslib_1.__decorate([
    NgModule({
        declarations: [NavComponent, MessageComponent],
        imports: [
            CommonModule,
            NgbModule,
            RouterModule
        ],
        exports: [NavComponent, MessageComponent],
        providers: [MessageService,
            { provide: ErrorHandler, useClass: MessageErrorHandler }]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map