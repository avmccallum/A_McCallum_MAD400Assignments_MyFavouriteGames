import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() appHoverAffect?: string;
  originalBorder: string = "";

  constructor(private elm: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(){
    this.decorateElement();
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.removeDecoration();
  }

  private decorateElement() {
    if(this.appHoverAffect == "type") {
      this.elm.nativeElement.style.textDecoration = "underline";
    } else if (this.appHoverAffect == "tag") {
      this.elm.nativeElement.style.fontWeight = "bold";
    } else if (this.appHoverAffect == "card") {
      this.originalBorder = this.elm.nativeElement.style.border
      this.elm.nativeElement.style.border = "5px solid black";
    }
  }

  private removeDecoration() {
    this.elm.nativeElement.style.textDecoration = "none";
    this.elm.nativeElement.style.fontWeight = "normal";
    this.elm.nativeElement.style.border = this.originalBorder;
  }
}
