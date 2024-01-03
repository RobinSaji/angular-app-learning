
//this is a custom attribute directive[ it is a directive that craeted by user manually which has the functionalities of ngstyle,ngclass . it is used for dynamic purposes]

import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector:'[setBackground]'//this is the selector of the directive . we can use this selector on any of the attribute we want.
})



export class SetBackground implements OnInit{
 //   private element:ElementRef


    @Input('setBackground') changeTextAndBackColor:{backColor:string,textColor:string};
    constructor(private element:ElementRef,private renderer:Renderer2){//the parameter(element) is local to the constructor so we cant access it inside the ngOnint
     //   this.element=element;
    }
    // constructor(private element:ElementRef){we can write the above code in this format too. when we write this format typescript will create a private property called element behind the scene and assign the value to the elemnt 
    //     this.element=element; // this line of code is not needed when creating  constructor in this format 
    // }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor='#36454F';
        // this.element.nativeElement.style.color='white';
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.changeTextAndBackColor.backColor);//using this renderer we are directly not manipulating the DOM, 
        this.renderer.setStyle(this.element.nativeElement,'color',this.changeTextAndBackColor.textColor);
        //this.renderer.setAttribute('this.element.nativeElement','title','this is a example title');
        
    } 
}