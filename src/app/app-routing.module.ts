import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/Brand/register/register.component';
// import { RegOneComponent } from './components/Brand/reg-one/reg-one.component';
import { RegThreeComponent } from './components/Brand/reg-three/reg-three.component';
// import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ForgetPasswordComponent } from './components/Brand/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordUserComponent } from './components/Brand/forget-password-user/forget-password-user.component';
import { ChangePasswordUserComponent } from './components/Brand/change-password-user/change-password-user.component';
import { CartComponent } from './components/User/cart/cart.component';
import { ProductDetailsComponent } from './components/User/product-details/product-details.component';
import { MembershipComponent } from './components/Brand/membership/membership.component';
import { LoginAdminComponent} from './components/Admin/loginadmin/login-admin.component';
import { ForgetPasswordAdminComponent } from './components/Admin/forgetpasswordadmin/forget-password-admin.component';
import { ChangePasswordAdminComponent } from './components/Admin/changepasswordadmin/change-password-admin.component';
import { LoginBrandComponent } from './components/Brand/loginbrand/login-brand.component';
import {  WaitingDashBoardComponent } from './components/Brand/waiting-dashboard/waiting-dashboardcomponent';
import { HomeComponent } from './components/User/home/home.component';
import { CategoriesComponent } from './components/User/categories/categories.component';

import { BrandMainComponent } from './components/Brand/brand-main/brand-main.component';
import {  LoginUserComponent } from './components/User/login-user/login-user.component';
import { SignupComponent} from './components/User/signup/signup.component';
import { BrandProfileComponent } from './components/Brand/brand-profile/brand-profile.component'
import { ProductsComponent } from './components/User/products/products.component';
import { ReggOneComponent } from './components/Brand/regg-one/regg-one.component';
// import { RegOnecopyComponent } from './components/reg-one copy/reg-one.component';
import { CreatePromocodeComponent } from './components/Brand/promocode/create-promocode/create-promocode.component';
import { PromocodeHistoryComponent } from './components/Brand/promocode/promocode-history/promocode-history.component';
import { EditPromocodeComponent } from './components/Brand/promocode/edit-promocode/edit-promocode.component';


const routes: Routes = [
  {path:"register", component:RegisterComponent},
//  {path:'reg-one',component:RegOneComponent},
  // {path:'reg-one-copy',component:RegOneComponent},
  {path:'reg-three',component:RegThreeComponent},
   {path:"login-admin", component:LoginAdminComponent},
  {path:"forget-password", component:ForgetPasswordComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetpassworduser',component:ForgetPasswordUserComponent},
 {path:'changePassword',component:ChangePasswordUserComponent},
 {path:'cart',component:CartComponent},
   {path:'product-details',component:ProductDetailsComponent},
   {path:'membership',component:MembershipComponent},
  //  {path:'loginadmin',component:LoginAdminComponent},
   {path:'forgetpasswordadmin',component:ForgetPasswordAdminComponent},
   {path:'changepasswordadmin',component:ChangePasswordAdminComponent},
   {path:'loginbrand',component:LoginBrandComponent},
   {path: 'waitingdashboard',component: WaitingDashBoardComponent},
   {path: 'homeuser', component: HomeComponent },
   {path: 'products', component: ProductsComponent },
   {path: 'user', component: CategoriesComponent },
   {path: 'userlogin', component: LoginUserComponent},
   {path: 'signup', component: SignupComponent },

   {path: 'brand-main', component: BrandMainComponent},
   {path: 'brand-profile', component: BrandProfileComponent},
   {path: 'reggone', component: ReggOneComponent},
   {path: 'create-promocode', component: CreatePromocodeComponent},
   { path: 'promocode-history', component: PromocodeHistoryComponent },
   { path: 'edit-promocode', component: EditPromocodeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
