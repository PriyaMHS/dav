import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightInput]'
})
export class HighlightInputDirective {
private specialKeys: Array<string> = [ 'Backspace', 'Tab'];
  @Input() color!: string;
possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  constructor(private elem: ElementRef, private renderer: Renderer2) {
  // @HostListener('input',['$event']) 
    
    
    // k(e: any):void {
    //   if(this.elem.nativeElement.value && this.elem.nativeElement.value.length > 10) {
    //     renderer.addClass(this.elem.nativeElement, 'highlight');
    //   } else {
    //     renderer.removeClass(this.elem.nativeElement, 'highlight');
    //   }
    // }
  }
  @HostBinding('style.border-color') borderColor !: string;
  @HostBinding('disabled') disableStr !: boolean;
  @HostBinding('class') classstr !: string;
  @HostListener('input', ['$event'])
    ngOnChanges(e: any): void {
console.log("color  " + this.color);
      this.color = this.color? this.color : 'green';
const colorPick = Math.floor(Math.random() * this.possibleColors.length);
      if(this.elem.nativeElement.value && this.elem.nativeElement.value.length > 10) {
        this.borderColor = this.color;
        this.classstr = "background";
        // this.disableStr = true;
        // this.color = this.borderColor = this.possibleColors[colorPick];
        // this.renderer.addClass(this.elem.nativeElement, 'highlight-' + this.color);
      } else {
        this.borderColor = "#000";
        this.classstr = "";
        // this.disableStr = false;
        // this.renderer.removeClass(this.elem.nativeElement, 'highlight-' + this.color);
      }
    }

}
