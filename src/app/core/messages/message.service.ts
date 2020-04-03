import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import { Subject, Observable, of } from "rxjs";


@Injectable()
export class MessageService {

    private subject = new Subject<Message>();

    reportMessage(msg: Message) { 
        this.subject.next(msg);
    } 

    get messages(): Observable<Message> {
        return this.subject;
       }

    confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');

    return of(confirmation);
    };



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
