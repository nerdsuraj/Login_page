import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './Components/update/update.component';
import { HomeviewComponent } from './Components/homeview/homeview.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';

const routes: Routes = [
  {path:"uplode",component:RegistrationComponent},
  {path:"",component:HomeviewComponent},
  {path:"login",component:LoginComponent},
  {path:"update",component:UpdateComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
