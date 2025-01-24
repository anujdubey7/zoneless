import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
 router = inject(Router);
 signUp(){
  this.router.navigateByUrl('signup')
 }
}
