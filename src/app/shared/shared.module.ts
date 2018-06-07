import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfiniteScrollDirective} from './directives/infinite-scroll.directive';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ScrollTopDirective} from './components/button-top/scroll-top.directive';
import {ButtonTopComponent} from './components/button-top/button-top.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ScrollTopDirective,
    ButtonTopComponent,
    InfiniteScrollDirective
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ScrollTopDirective,
    ButtonTopComponent,
    InfiniteScrollDirective
  ]
})
export class SharedModule { }
