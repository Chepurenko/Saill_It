import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {
  @Input() goScroll: boolean;
  @Output() infiniteScrollAction = new EventEmitter<any>();
  constructor() {
  }
  @HostListener('window:scroll')
  public onScroll() {
      console.log(window.innerHeight, window.scrollY, this.goScroll);
    if (window.scrollY > (window.innerHeight - 500) && this.goScroll) {
      this.infiniteScrollAction.emit();
    }
  }
}
