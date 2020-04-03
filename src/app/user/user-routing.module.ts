import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {UserDetailsGuard} from './user-details.guard';
import {EditComponent} from './edit/edit.component';
import { UserComponent } from './user/user.component';
import { ProfilePageResolver } from './profile-page/profilePage.resolver';

const routes: Routes = [

{ 
    path: 'users',
    component:UserComponent,
    children:[
        {
            path: ':username',
            component: ProfilePageComponent,
           
        },
            
        {
            path: ':username/edit',
            component: EditComponent,
            canActivate: [UserDetailsGuard]
        }
            
    ],
    resolve: {selected: ProfilePageResolver}

},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
