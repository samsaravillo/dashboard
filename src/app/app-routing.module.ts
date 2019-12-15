import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { ProductDetailComponent } from './dashboard/products/product-detail/product-detail.component';
import { ProductAddComponent } from './dashboard/products/product-add/product-add.component';
import { ProductEditComponent } from './dashboard/products/product-edit/product-edit.component';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [{ 
      path: '', 
      component: LoginComponent 
    },
    { 
      path: 'dashboard', 
      component: DashboardComponent,
      children: [{
        path:'home',
        component: HomeComponent
      },
      {
        path:'products',
        component: ProductsComponent
      },
      ] 
    },
  // { path : '', component : LoginComponent},
  // { path : 'products', 
  //     component : ProductsComponent, 
  //     data:{
  //       title: 'List of Products'
  //   }
  // },
  // { path : 'product-details/:id', 
  //     component : ProductDetailComponent, 
  //     data:{
  //       title: 'Product Details'
  //   }
  // },
  // { path : 'product-add', 
  //     component : ProductAddComponent, 
  //     data:{ 
  //       title: 'Add Product'
  //   }
  // },
  // { path : 'product-edit/:id', 
  //     component : ProductEditComponent, 
  //     data:{
  //       title: 'Edit Product'
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
