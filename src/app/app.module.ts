import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './core/auth.service';
import {AuthInterceptorService} from './core/auth-interceptor.service';
import {CookieService} from 'ng2-cookies';
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from 'angular5-social-login';


// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('837694048230-keo53o03s8od9ee39boib7o6prp18fs5.apps.googleusercontent.com')
      },
    ]
);
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
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
