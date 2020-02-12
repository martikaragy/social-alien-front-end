import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports:[NavComponent]
})
export class CoreModule { }