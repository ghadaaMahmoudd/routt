// import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';


import { ReggOneComponent } from './components/Brand/regg-one/regg-one.component';
import { RegisterComponent } from './components/Brand/register/register.component';
import { RegThreeComponent } from './components/Brand/reg-three/reg-three.component';
import { LoginBrandComponent } from './components/Brand/loginbrand/login-brand.component';
import { ForgetPasswordBrandComponent } from './components/Brand/forget-password-brand/forget-password-brand.component';
import { ChangePasswordBrandComponent } from './components/Brand/change-password-brand/change-password-brand.component';
import { CartComponent } from './components/User/cart/cart.component';
import { ProductDetailsComponent } from './components/User/product-details/product-details.component';
import { MembershipComponent } from './components/Brand/membership/membership.component';
import { LoginAdminComponent } from './components/Admin/loginadmin/login-admin.component';
import { ForgetPasswordAdminComponent } from './components/Admin/forgetpasswordadmin/forget-password-admin.component';
import { ChangePasswordAdminComponent } from './components/Admin/changepasswordadmin/change-password-admin.component';
import {  WaitingDashBoardComponent } from './components/Brand/waiting-dashboard/waiting-dashboardcomponent';
import { HomeComponent } from './components/User/home/home.component';
import { CategoriesComponent } from './components/User/categories/categories.component';

import { BrandMainComponent } from './components/Brand/brand-main/brand-main.component';
import {  LoginUserComponent } from './components/User/login-user/login-user.component';
import { SignupComponent} from './components/User/signup/signup.component';
import { BrandProfileComponent } from './components/Brand/brand-profile/brand-profile.component'
import { ProductsComponent } from './components/User/products/products.component';
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
import { ManageAccountComponent } from './components/User/manage-account/manage-account.component';
import { UserOrdersComponent } from './components/User/user-orders/user-orders.component';
import { ContactComponent } from './components/User/contact/contact.component';
import { FavoritesComponent } from './components/User/favorites/favorites.component';
import { AboutComponent } from './components/User/about/about.component';
import { ProductPageComponent } from './components/User/product-page/product-page.component';
import { EmptyCartComponent } from './components/User/empty-cart/empty-cart.component';


import { SidebarComponent } from './components/Admin/admin/sidebar/sidebar.component';
import { HeaderComponent } from './components/Admin/admin/header/header.component';
import { FilterComponent } from './components/Admin/admin/filter/filter.component';
import { DashboardComponent } from './components/Admin/admin/dashboard/dashboard.component';
import { AdminComponent } from './components/Admin/admin/admin/admin.component';
// import { NgChartsModule } from 'ng2-charts';

import { BrandManagmentComponent } from './components/Admin/admin/brand-managment/brand-managment.component';
import { ClientManagmentComponent } from './components/Admin/admin/client-managment/client-managment.component';
import { RequestManagmentComponent } from './components/Admin/admin/request-managment/request-managment.component';
import { FinancialManagmentComponent } from './components/Admin/admin/financial-managment/financial-managment.component';
import { OrderManagmentComponent } from './components/Admin/admin/order-managment/order-managment.component';
import { ProductManagmentComponent } from './components/Admin/admin/product-managment/product-managment.component';
import { PromocodeManagmentComponent } from './components/Admin/admin/promocode-managment/promocode-managment.component';
import { SettingComponent } from './components/Admin/admin/setting/setting.component';
import { TryingComponent } from './components/Admin/admin/trying/trying.component';
import { NgModule } from '@angular/core';












const routes: Routes = [
  // { path: '', redirectTo: 'reggone', pathMatch: 'full' },
  {path: 'reggone', component: ReggOneComponent},
   {path:"register", component:RegisterComponent},
   {path:'reg-three',component:RegThreeComponent},
   {path:'forgetpasswordbrand',component:ForgetPasswordBrandComponent},
   {path:'changepasswordbrand',component:ChangePasswordBrandComponent},
   {path:'cart',component:CartComponent},
   {path:'product-details',component:ProductDetailsComponent},
   {path:'membership',component:MembershipComponent},
   {path:'loginadmin',component:LoginAdminComponent},
   {path:'forgetpasswordadmin',component:ForgetPasswordAdminComponent},
   {path:'changepasswordadmin',component:ChangePasswordAdminComponent},
   {path:'loginbrand',component:LoginBrandComponent},
   {path: 'waitingdashboard',component: WaitingDashBoardComponent},
   {path: 'homeuser', component: HomeComponent },
   {path: 'products', component: ProductsComponent },
   {path: 'user', component: CategoriesComponent },
   {path: 'loginuser', component: LoginUserComponent},
   {path: 'signup', component: SignupComponent },
   {path: 'brand-main', component: BrandMainComponent},
   {path: 'brand-profile', component: BrandProfileComponent},
   {path: 'create-promocode', component: CreatePromocodeComponent},
   { path: 'promocode-history', component: PromocodeHistoryComponent },
   { path: 'edit-promocode', component: EditPromocodeComponent },
   { path: 'teamwork-basic', component: TeamworkBasicComponent },
   { path: 'teamwork-brand', component: TeamworkBrandComponent },
   { path: 'teamwork-add', component: TeamworkAddComponent },
   { path: 'chats', component: ChatsComponent },
   { path: 'sales-report', component: SalesReportComponent },
   { path: 'sales-for-brand', component: SalesForBrandComponent },
   { path: 'my-products', component:MyProductsComponent},
   { path: 'my-products-add', component:MyProductsAddComponent},
   { path: 'my-products-report', component:MyProductsReportComponent},
   { path: 'my-product-details', component:MyProductsDetailsComponent},
   { path: 'orders', component:OrdersComponent},
   { path: 'order-details/:id', component:OrderDetailsComponent},
   { path: 'home-navbar', component:HomeNavbarComponent},
   { path: 'collections', component:CollectionsComponent},
   { path: 'manage-account', component:ManageAccountComponent},
   { path: 'user-orders', component:UserOrdersComponent},
   { path: 'contact', component:ContactComponent},
   { path: 'favorites', component:FavoritesComponent},
   { path: 'about', component:AboutComponent},
   { path: 'product-page', component:ProductPageComponent},
   { path: 'empty-cart', component:EmptyCartComponent},
   {path:'admin' , component:AdminComponent
    ,children:[

   {path:'app-dashboard' , component:DashboardComponent},
   {path:'brand-managment',component:BrandManagmentComponent},
   {path:'setting',component:SettingComponent},
   {path:'test',component:TryingComponent},
    ]
   },
   {path:'app-header' , component:HeaderComponent},
   {path:'app-sidebar' , component:SidebarComponent},
   {path:'app-filter' , component:FilterComponent},
   {path:'app-dashboard' , component:DashboardComponent},
   {path:'brand-managment',component:BrandManagmentComponent},
  //  {path:'setting',component:SettingComponent},
   {path:'test',component:TryingComponent},
   {path:'product-managment',component:ProductManagmentComponent},
   {path:'client-managment',component:ClientManagmentComponent},
   {path:'order-managment',component:OrderManagmentComponent},
   {path:'promocode-managment',component:PromocodeManagmentComponent},
   {path:'financial-managment',component:FinancialManagmentComponent},
   {path:'request-managment',component:RequestManagmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
