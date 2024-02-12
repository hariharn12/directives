import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { CommonModule } from '@angular/common';
import { PreventdefaultDirective } from './preventdefault.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxComponent, CommonModule,RouterOutlet,RouterLink,PreventdefaultDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directives';
  specialbox = '800px';
  buttonclick = '';
  alertmsg(buttonname = '') {
    // window.alert('heelo angular' + buttonname);
    this.buttonclick = buttonname;    
  }
  // stopEvent(event: MouseEvent){
  //   event.stopPropagation();
  //   event.preventDefault();
    
  // }
}
