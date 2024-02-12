import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventdefault]',
  standalone: true
})
export class PreventdefaultDirective {

  constructor() { 

  }
  @HostListener('click')
  stopEvent(event: MouseEvent){
    // event.stopPropagation();
    event.preventDefault();
    
  }
  

}
