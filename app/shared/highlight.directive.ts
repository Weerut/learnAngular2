import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective {

    constructor(el: ElementRef, renderer: Renderer) {
        // el.nativeElement.style.backgroundColor = 'yellow';
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }

}
