import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective {

  constructor(public eleRef:ElementRef) { 
    // console.log(this.eleRef)
  }
 //binding allows you to set the properties
  @HostBinding('style.background') color :any; 

  //listens to the dom 
  @HostListener('style.background') bgcolor:any;

  ngOnInit(){
    this.color = 'red';
    this.bgcolor ='blue';
    console.log(this.color, "__COLOR");
    console.log(this.bgcolor);
  }
}
