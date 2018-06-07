import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {
  private crossbar: number;
  @Input() goScroll: boolean;
  @Output() infiniteScrollAction = new EventEmitter<any>();
  constructor() {
  }
  @HostListener('window:resize')
  public onResize() {
    this.crossbar = document.body.offsetHeight - window.innerHeight - 150;
  }
  @HostListener('window:scroll')
  public onScroll() {
    this.onResize();
      console.log(window.innerHeight, window.scrollY, this.goScroll);
    if (window.scrollY > this.crossbar && this.goScroll) {
      this.infiniteScrollAction.emit();
    }
  }
}
