import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {NewProductComponent} from './new-product.component';
import {NewProductRoutingModule} from './new-product-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    NewProductRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    NewProductComponent
  ],
  exports: [
    NewProductRoutingModule
  ]
})
export class NewProductModule { }
