import {NgModule} from '@angular/core';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {CommonModule} from '@angular/common';
import {ScrollTopDirective} from './components/button-top/scroll-top.directive';
import {ButtonTopComponent} from './components/button-top/button-top.component';
import {InfiniteScrollDirective} from './directives/infinite-scroll.directive';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ScrollTopDirective,
    ButtonTopComponent,
    InfiniteScrollDirective
  ],
  imports: [
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
