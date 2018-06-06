import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'datail', loadChildren: './datail-page/datail-page.module#DatailPageModule'},
  {path: 'login', loadChildren: './login-page/login-page.module#LoginPageModule'},
  {path: 'product', loadChildren: './product-list/product-list.module#ProductListModule'},
  {path: '', redirectTo: 'product', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
