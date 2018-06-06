import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {ProductListComponent} from './product-list.component';
import {DataService} from '../core/data.service';
import {ProductListRoutingModule} from './product-list-routing.module';
import {ProductItemComponent} from './product-item/product-item.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductListRoutingModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [
    DataService
  ]
})
export class ProductListModule {
}
