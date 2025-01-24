import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector: 'app-date-picker',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {
  
}
