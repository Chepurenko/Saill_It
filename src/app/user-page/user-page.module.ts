import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {UserPageComponent} from './user-page.component';
import {UserPageRoutingModule} from './user-page-routing.module';

@NgModule({
  imports: [
    UserPageRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    UserPageComponent
  ],
  exports: [
    UserPageRoutingModule
  ]
})
export class UserPageModule { }
