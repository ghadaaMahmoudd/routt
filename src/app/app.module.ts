import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';

 import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
// import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReggOneComponent } from './components/Brand/regg-one/regg-one.component';
import { RegisterComponent } from './components/Brand/register/register.component';
import { RegThreeComponent } from './components/Brand/reg-three/reg-three.component';
import { LoginAdminComponent } from './components/Admin/loginadmin/login-admin.component';
import { ForgetPasswordBrandComponent } from './components/Brand/forget-password-brand/forget-password-brand.component';
import { ChangePasswordBrandComponent } from './components/Brand/change-password-brand/change-password-brand.component';
import{HttpClientModule ,HTTP_INTERCEPTORS}from'@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CartComponent } from './components/User/cart/cart.component';
import { ProductDetailsComponent } from './components/User/product-details/product-details.component';
import { MembershipComponent } from './components/Brand/membership/membership.component';
import { MatDialogModule } from '@angular/material/dialog';
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
import { CreatePromocodeComponent } from './components/Brand/promocode/create-promocode/create-promocode.component';
import { PromocodeHistoryComponent } from './components/Brand/promocode/promocode-history/promocode-history.component';
import { EditPromocodeComponent } from './components/Brand/promocode/edit-promocode/edit-promocode.component';
import { TeamworkBasicComponent } from './components/Brand/teamwork/teamwork-basic/teamwork-basic.component';
import { TeamworkBrandComponent } from './components/Brand/teamwork/teamwork-brand/teamwork-brand.component';
import { TeamworkAddComponent } from './components/Brand/teamwork/teamwork-add/teamwork-add.component';
import { ChatsComponent } from './components/Brand/chats/chats.component';
import { SalesReportComponent } from './components/Brand/sales-report/sales-report.component';
import { SalesForBrandComponent } from './components/Brand/sales-for-brand/sales-for-brand.component';
import { MyProductsComponent } from './components/Brand/myProducts/my-products/my-products.component';
import { MyProductsAddComponent } from './components/Brand/myProducts/my-products-add/my-products-add.component';
import { MyProductsReportComponent } from './components/Brand/myProducts/my-products-report/my-products-report.component';
import { MyProductsDetailsComponent } from './components/Brand/myProducts/my-products-details/my-products-details.component';
import { OrdersComponent } from './components/Brand/brand-orders/orders/orders.component';
import { OrderDetailsComponent } from './components/Brand/brand-orders/order-details/order-details.component';
import { HomeNavbarComponent } from './components/User/home-navbar/home-navbar.component';
import { CollectionsComponent } from './components/User/collections/collections.component';
import { ProductCardComponent } from './components/User/product-card/product-card.component';
import { ManageAccountComponent } from './components/User/manage-account/manage-account.component';
import { UserOrdersComponent } from './components/User/user-orders/user-orders.component';
import { ContactComponent } from './components/User/contact/contact.component';
import { FavoritesComponent } from './components/User/favorites/favorites.component';
import { AboutComponent } from './components/User/about/about.component';
import { ProductPageComponent } from './components/User/product-page/product-page.component';
import { EmptyCartComponent } from './components/User/empty-cart/empty-cart.component';

// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { SidebarComponent } from './components/Admin/admin/sidebar/sidebar.component';
// import { HeaderComponent } from './components/Admin/admin/header/header.component';
// import { FilterComponent } from './components/Admin/admin/filter/filter.component';
import { DashboardComponent } from './components/Admin/admin/dashboard/dashboard.component';
// import { AdminComponent } from './components/Admin/admin/admin/admin.component';
import { NgChartsModule } from 'ng2-charts';
import { SummaryCardsComponent } from './components/Admin/admin/summary-cards/summary-cards.component';
import { MonthlyTargetComponent } from './components/Admin/admin/monthly-target/monthly-target.component';
import { ActivateUserComponent } from './components/Admin/admin/activate-user/activate-user.component';
import { TopBrandComponent } from './components/Admin/admin/top-brand/top-brand.component';
// import { BrandManagmentComponent } from './components/Admin/admin/brand-managment/brand-managment.component';
// import { ClientManagmentComponent } from './components/Admin/admin/client-managment/client-managment.component';
// import { RequestManagmentComponent } from './components/Admin/admin/request-managment/request-managment.component';
// import { FinancialManagmentComponent } from './components/Admin/admin/financial-managment/financial-managment.component';
// import { OrderManagmentComponent } from './components/Admin/admin/order-managment/order-managment.component';
// import { ProductManagmentComponent } from './components/Admin/admin/product-managment/product-managment.component';
// import { PromocodeManagmentComponent } from './components/Admin/admin/promocode-managment/promocode-managment.component';
import { SettingComponent } from './components/Admin/admin/setting/setting.component';
// import { TryingComponent } from './components/Admin/admin/trying/trying.component';



@NgModule({
  declarations: [
    AppComponent,
    ReggOneComponent,
    RegisterComponent,
    RegThreeComponent,
    LoginAdminComponent,
    ForgetPasswordBrandComponent,
    ChangePasswordBrandComponent,
    CartComponent,
    ProductDetailsComponent,
    MembershipComponent,
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
    CreatePromocodeComponent,
    PromocodeHistoryComponent,
    EditPromocodeComponent,
    TeamworkBasicComponent,
    TeamworkBrandComponent,
    TeamworkAddComponent,
    ChatsComponent,
    SalesReportComponent,
    SalesForBrandComponent,
    MyProductsComponent,
    MyProductsAddComponent,
    MyProductsReportComponent,
    MyProductsDetailsComponent,
    OrdersComponent,
    OrderDetailsComponent,
    HomeNavbarComponent,
    CollectionsComponent,
    ProductCardComponent,
    ManageAccountComponent,
    UserOrdersComponent,
    ContactComponent,
    FavoritesComponent,
    AboutComponent,
    ProductPageComponent,
    EmptyCartComponent,
    // SidebarComponent,
    // HeaderComponent,
    // FilterComponent,
    // AdminComponent,
    DashboardComponent ,

    SummaryCardsComponent,
    MonthlyTargetComponent,
    ActivateUserComponent,
    TopBrandComponent,
    // BrandManagmentComponent,
    // ClientManagmentComponent,
    // FinancialManagmentComponent,
    // OrderManagmentComponent,
    // ProductManagmentComponent,
    // PromocodeManagmentComponent,
    // RequestManagmentComponent,
    SettingComponent,
    // TryingComponent


  ],



  imports: [
    BrowserModule,
    HttpClientModule,
     AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    MatDialogModule ,
    FormsModule,
    NgChartsModule ,
    CommonModule,
     RouterModule,
    NgxPaginationModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]


  ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
