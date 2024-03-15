import { CsliderComponent } from './cslider/cslider.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { pathGuard } from './path.guard';
import { CheckOutComponent } from './check-out/check-out.component';


const routes: Routes = [
  {path:'',redirectTo:'/register',pathMatch:'full'},
  {path:'home',component:HomeComponent , canActivate:[pathGuard] },
  {path:'cart',component:CartComponent , canActivate:[pathGuard]},
  {path:'Products',component:ProductsComponent , canActivate:[pathGuard]},
  {path:'brands',component:BrandsComponent , canActivate:[pathGuard]},
  {path:'categories',component:CategoriesComponent , canActivate:[pathGuard]},
  {path:'chechout/:cartId',component:CheckOutComponent , canActivate:[pathGuard]},

  {path:'register',component:RegisterComponent },
  {path:'login',component:LoginComponent },
  {path:'productdetails/:productId/:pname',component:ProductDetailsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
