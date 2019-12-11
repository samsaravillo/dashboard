import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { ProductDetailComponent } from './dashboard/product-detail/product-detail.component';
import { ProductAddComponent } from './dashboard/product-add/product-add.component';
import { ProductEditComponent } from './dashboard/product-edit/product-edit.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path : '', component : LoginComponent},
  { path : 'products', 
      component : ProductsComponent, 
      data:{
        title: 'List of Products'
    }
  },
  { path : 'product-details/:id', 
      component : ProductDetailComponent, 
      data:{
        title: 'Product Details'
    }
  },
  { path : 'product-add', 
      component : ProductAddComponent, 
      data:{ 
        title: 'Add Product'
    }
  },
  { path : 'product-edit/:id', 
      component : ProductEditComponent, 
      data:{
        title: 'Edit Product'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
