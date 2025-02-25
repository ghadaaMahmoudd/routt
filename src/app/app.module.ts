
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/Brand/register/register.component';
// import { RegOneComponent } from './components/Brand/reg-one/reg-one.component';
import { RegThreeComponent } from './components/Brand/reg-three/reg-three.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ForgetPasswordComponent } from './components/Brand/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordUserComponent } from './components/Brand/forget-password-user/forget-password-user.component';
import { ChangePasswordUserComponent } from './components/Brand/change-password-user/change-password-user.component';
import{HttpClientModule}from'@angular/common/http';
import { CartComponent } from './components/User/cart/cart.component';
import { ProductDetailsComponent } from './components/User/product-details/product-details.component';
import { MembershipComponent } from './components/Brand/membership/membership.component';

import { MatDialogModule } from '@angular/material/dialog';
// import { BrandProfileComponent } from './components/Brand/brand-profile/brand-profile.component';
// import { SignupComponent } from './components/User/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginBrandComponent } from './components/Brand/loginbrand/login-brand.component';
import {  WaitingDashBoardComponent } from './components/Brand/waiting-dashboard/waiting-dashboardcomponent';
import { HomeComponent } from './components/User/home/home.component';
import { NavbarComponent } from './components/User/navbar/navbar.component';
import { HeroSectionComponent } from './components/User/hero-section/hero-section.component';
import { CategoriesComponent } from './components/User/categories/categories.component';
import { ProductsComponent } from './components/User/products/products.component';
import { TopBrandsComponent } from './components/User/top-brands/top-brands.component';
import { ReviewsComponent } from './components/User/reviews/reviews.component';
import { FooterComponent } from './components/User/footer/footer.component';

 import { NgxEchartsModule } from 'ngx-echarts';
import { BrandMainComponent } from './components/Brand/brand-main/brand-main.component';
import {  LoginUserComponent } from './components/User/login-user/login-user.component';
import { SignupComponent } from './components/User/signup/signup.component';
import { BrandProfileComponent } from './components/Brand/brand-profile/brand-profile.component';
import { ForgetPasswordAdminComponent } from './components/Admin/forgetpasswordadmin/forget-password-admin.component';
import { ChangePasswordAdminComponent } from './components/Admin/changepasswordadmin/change-password-admin.component';
import { ReggOneComponent } from './components/Brand/regg-one/regg-one.component';
import { CreatePromocodeComponent } from './components/Brand/promocode/create-promocode/create-promocode.component';
import { PromocodeHistoryComponent } from './components/Brand/promocode/promocode-history/promocode-history.component';
import { EditPromocodeComponent } from './components/Brand/promocode/edit-promocode/edit-promocode.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    // RegOneComponent,
   RegThreeComponent,
    LoginAdminComponent,
    ForgetPasswordComponent,
    LoginComponent,
    ForgetPasswordUserComponent,
    ChangePasswordUserComponent,
    CartComponent,
    ProductDetailsComponent,
    MembershipComponent,
    // LoginComponentAdmin,
    ForgetPasswordAdminComponent,
    ChangePasswordAdminComponent,
    LoginBrandComponent,
    WaitingDashBoardComponent,
    NavbarComponent,
    HeroSectionComponent,
    CategoriesComponent,
    ProductsComponent,
    TopBrandsComponent,
    ReviewsComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    BrandMainComponent,
    LoginUserComponent,
    SignupComponent,
    BrandProfileComponent,
    ReggOneComponent,
    CreatePromocodeComponent,
    PromocodeHistoryComponent,
    EditPromocodeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]

  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
