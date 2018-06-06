import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrollTop]',
})
export class ScrollTopDirective {
  @HostListener('click') onClick() {
    console.log('click');
    window.scroll({top: 0, behavior: 'smooth'});
  }
}
