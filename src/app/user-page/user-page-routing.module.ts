import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from './user-page.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: '', component: UserPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class UserPageRoutingModule {}
