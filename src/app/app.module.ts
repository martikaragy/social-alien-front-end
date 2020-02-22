import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CoreModule} from 'src/app/core/core.module';
import {UserModule} from 'src/app/user/user.module';
import {PostModule} from 'src/app/post/post.module';
import { AuthenticationModule } from './authentication/authentication.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpXsrfInterceptor} from './xsrf.interceptor';
import {HttpClientXsrfModule, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({headerName: 'X-CSRF'}),
    CoreModule,
    UserModule,
    PostModule,
    AuthenticationModule,
    AppRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
