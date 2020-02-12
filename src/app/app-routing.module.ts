import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilePageComponent } from './user/profile-page/profile-page.component';


const routes: Routes = [

{
 path: '',
 pathMatch: 'full',
 component: HomeComponent
},
{
  path: 'users/:username',
  component: ProfilePageComponent
},
{
  path: '**',
  component: PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
