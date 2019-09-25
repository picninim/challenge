import { ScrollTriggerDirective } from './scroll-trigger.directive';
import { ElementRef } from '@angular/core';

describe('ScrollTriggerDirective', () => {
  it('should create an instance', () => {
    const directive = new ScrollTriggerDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
