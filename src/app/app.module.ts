import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './core/auth.service';
import {AuthInterceptorService} from './core/auth-interceptor.service';
import {CookieService} from 'ng2-cookies';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
