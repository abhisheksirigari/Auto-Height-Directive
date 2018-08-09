import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoHeight]' // Attribute selector
})
export class AutoHeightDirective implements OnInit {
  // @Input('autoresize') maxHeight: string;
  @Input() maxHeight: string;

  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjust();
  }

  constructor(public element: ElementRef) {
  }

  ngOnInit(): void {
    this.adjust();
  }

  adjust(): void {
    const ta = this.element.nativeElement;
    let newHeight;

    if (ta) {
      ta.style.overflow = 'hidden';
      ta.style.height = 'auto';
      if (this.maxHeight) {
        newHeight = Math.min(ta.scrollHeight, +this.maxHeight);
      } else {
        newHeight = ta.scrollHeight;
      }
      if (newHeight === 0) {
        ta.style.height = '50px';
      } else {
        ta.style.height = newHeight + 'px';
      }
    }
  }
}

