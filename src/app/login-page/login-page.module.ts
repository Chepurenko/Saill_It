import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {LoginPageComponent} from './login-page.component';
import {LoginPageRoutingModule} from './login-page-routing.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    LoginPageRoutingModule
  ],
  exports: [
    LoginPageComponent
  ],
  providers: [  ]
})
export class LoginPageModule {
}
