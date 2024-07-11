import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBrotherStyles]'
})
export class BrotherStylesDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  };

}
