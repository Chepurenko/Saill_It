import {NgModule} from '@angular/core';
import {DatailPageComponent} from './datail-page.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {DataService} from '../core/data.service';
import {DatailPageRoutingModule} from './datail-page-routing.module';

@NgModule({
  declarations: [
    DatailPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DatailPageRoutingModule
  ],
  exports: [
    DatailPageComponent
  ],
  providers: [
    DataService
  ]
})
export class DatailPageModule {
}
