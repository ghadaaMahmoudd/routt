
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { RegOneComponent } from './components/reg-one/reg-one.component';
import { RegThreeComponent } from './components/reg-three/reg-three.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordUserComponent } from './components/forget-password-user/forget-password-user.component';
import { ChangePasswordUserComponent } from './components/change-password-user/change-password-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegOneComponent,
   RegThreeComponent,
    LoginAdminComponent,
    ForgetPasswordComponent,
    LoginComponent,
    ForgetPasswordUserComponent,
    ChangePasswordUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
