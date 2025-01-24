import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { MainPageComponent } from './components/main-page/main-page.component';


// {} [] *

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
