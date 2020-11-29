import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent
  },
  {
    path: "check-out",
    component: CheckOutComponent
  },
  {
    path: "order-success",
    component: OrderSuccessComponent
  },
  {
    path: "my/orders",
    component: MyOrdersComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin/products",
    component: AdminProductsComponent
  },

  {
    path: "admin/orders",
    component: AdminOrdersComponent
  },
  {
    path: "admin/products/new",
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
