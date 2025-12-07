import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 12px #4caf50');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.02)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', '0.2s');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}