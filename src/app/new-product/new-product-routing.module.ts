import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NewProductComponent} from './new-product.component';

const routes: Routes = [
  {path: '', component: NewProductComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class NewProductRoutingModule { }
