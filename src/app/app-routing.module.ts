import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdvertResolverService} from './core/data-resolver.service';

const routes: Routes = [
  {path: 'login', loadChildren: './login-page/login-page.module#LoginPageModule'},
  {path: 'product', loadChildren: './product-list/product-list.module#ProductListModule'},
  {path: 'datail/:id', loadChildren: './datail-page/datail-page.module#DatailPageModule', resolve: {advert: AdvertResolverService}},
  {path: 'new', loadChildren: './new-product/new-product.module#NewProductModule'},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
