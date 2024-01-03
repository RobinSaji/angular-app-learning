import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {

  constructor(private element:ElementRef,private render:Renderer2) {

   }
   //the hosbinding will bind any of the property of the directive wih any variable.
   @HostBinding('style.backgroundColor') backgroundColor:string='#28282B';
   @HostBinding('style.border') border:string='#28282B 2px solid';
   @HostBinding('style.color') textColor:string='white';

   @HostListener('mouseenter') OnmouseEnter(){
    this.render.addClass(this.element.nativeElement,'highlight');
    this.backgroundColor='green';
    this.textColor='white'
   }
   @HostListener('mouseout') OnmouseOut(){
    //The binded  variable can later be used for changing its value dynamically which will also affect the orginal view
    this.render.removeClass(this.element.nativeElement,'highlight');
    this.backgroundColor='white';
    this.textColor='#28282B'
   }

}
