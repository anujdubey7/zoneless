import { NgModule, NgZone, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignupComponent } from './components/signup/signup.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ZonelessComponent } from './components/zoneless/zoneless.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignupComponent,
    DatePickerComponent,
    MainPageComponent,
    PaginatorComponent,
    ZonelessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule, MatDatepickerModule, MatFormFieldModule, MatPaginatorModule, MatCheckboxModule, MatCheckboxModule, 
    FormsModule,

  ],
  providers: [ 
    provideAnimationsAsync(),provideNativeDateAdapter(), provideExperimentalZonelessChangeDetection() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
