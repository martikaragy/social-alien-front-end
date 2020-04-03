import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {RouterModule} from '@angular/router';
import {MessageService} from 'src/app/core/messages/message.service'
import { MessageComponent } from './messages/message.component';
import {URL} from './nav/nav.component';


@NgModule({
  declarations: [NavComponent,MessageComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports:[NavComponent, MessageComponent],
  providers: [MessageService,
    {provide: URL, useValue: 'http://localhost:4200/api/user'}]
        // { provide: ErrorHandler, useClass: MessageErrorHandler }]
})
export class CoreModule { }