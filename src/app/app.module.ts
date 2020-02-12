import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {CoreModule} from 'src/app/core/core.module';
import {UserModule} from 'src/app/user/user.module';
import {PostModule} from 'src/app/post/post.module';
import {SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    UserModule,
    PostModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
