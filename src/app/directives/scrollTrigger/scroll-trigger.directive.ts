import { Directive, Input, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';

export interface ScrollInterface {
  position: number;
  percent: number;
}

@Directive({
  selector: '[appScrollTrigger]'
})
export class ScrollTriggerDirective {

  @Input() isScrollAllowed = true;
  @Input() appScrollTrigger = 75;

  @Output() scrolling = new EventEmitter<ScrollInterface>();
  @Output() scrollingOff = new EventEmitter<boolean>();

  @HostListener('scroll') scroll() {
    if (this.isScrollAllowed && this.isScrollAtPosition) {
      this.isScrollAllowed && this.scrolling.emit(this.scrollPosition);
    }
  }

  set allowScroll(bool: boolean) {
    this.isScrollAllowed = bool;
    !bool && this.scrollingOff.emit(this.isScrollAllowed);
  }

  get allowScroll() {
    return this.isScrollAllowed;
  }

  get scrollPosition(): ScrollInterface {
    const el = this.elementRef.nativeElement;
    const height = el.clientHeight;
    const scroll = el.scrollHeight - height;
    const position = el.scrollTop;
    const percent = position * 100 / scroll;
    return { position,  percent };
  }

  get isScrollAtPosition() {
    return this.scrollPosition.percent >= this.appScrollTrigger;
  }

  constructor(
    private elementRef: ElementRef
  ) {
  }
}
