import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        children:[

            {
            path: ':username',
            component: UserPageComponent
              }
        ]
    }
    ];
    
    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class UserRoutingModule { }