import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { RegOneComponent } from './components/reg-one/reg-one.component';
import { RegThreeComponent } from './components/reg-three/reg-three.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordUserComponent } from './components/forget-password-user/forget-password-user.component';
import { ChangePasswordUserComponent } from './components/change-password-user/change-password-user.component';
// import { RegOnecopyComponent } from './components/reg-one copy/reg-one.component';
const routes: Routes = [
  {path:"register", component:RegisterComponent},
 {path:'reg-one',component:RegOneComponent},
  // {path:'reg-one-copy',component:RegOneComponent},
  {path:'reg-three',component:RegThreeComponent},
  {path:"login-admin", component:LoginAdminComponent},
  {path:"forget-password", component:ForgetPasswordComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetpassworduser',component:ForgetPasswordUserComponent},
  {path:'changePassword',component:ChangePasswordUserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
