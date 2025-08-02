import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFlashlight]',
  standalone: true,
})
export class FlashlightDirective implements OnInit {
  private colorImage!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.colorImage = this.el.nativeElement.querySelector('.color-image');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const radius = window.innerWidth / 30;
    const x = event.offsetX;
    const y = event.offsetY;

    this.renderer.setStyle(this.colorImage, 'clip-path', `circle(${radius}px at ${x}px ${y}px)`);
    this.renderer.setStyle(this.colorImage, 'opacity', '1');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.colorImage, 'transition', 'none');
    this.renderer.setStyle(this.colorImage, 'opacity', '0');
    this.renderer.setStyle(this.colorImage, 'clip-path', 'circle(0px at 0 0)');
  }
}
