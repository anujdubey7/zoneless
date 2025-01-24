import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: false,
  
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  checked = false;
}
