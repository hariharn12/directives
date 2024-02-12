import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PreventdefaultDirective } from '../preventdefault.directive';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,PreventdefaultDirective],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent {
  @Input() size = '';
  @Output() xyz = new EventEmitter();
  trigger(buttonname = 'string') {
    this.xyz.emit(buttonname);
  }
 
}
