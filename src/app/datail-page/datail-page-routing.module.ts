import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DatailPageComponent} from './datail-page.component';

const routes: Routes = [
  {path: ':id', component: DatailPageComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatailPageRoutingModule {}
