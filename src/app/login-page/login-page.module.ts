import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {LoginPageComponent} from './login-page.component';
import {LoginPageRoutingModule} from './login-page-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginPageComponent
  ],
  providers: [  ]
})
export class LoginPageModule {
}
