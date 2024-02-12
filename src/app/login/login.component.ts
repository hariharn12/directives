import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PreventdefaultDirective } from '../preventdefault.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,PreventdefaultDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
