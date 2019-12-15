import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../shared/material.module'; 
import { SideNavigationComponent } from '../dashboard/side-navigation/side-navigation.component';
import { HeaderComponent } from '../dashboard/header/header.component';
import { ProductsComponent } from '../dashboard/products/products.component';
import { ProductDetailComponent } from '../dashboard/products/product-detail/product-detail.component';
import { ProductAddComponent } from '../dashboard/products/product-add/product-add.component';
import { ProductEditComponent } from '../dashboard/products/product-edit/product-edit.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        DashboardComponent,
        SideNavigationComponent,
        HeaderComponent,
        HomeComponent,
        ProductsComponent,
        ProductDetailComponent,
        ProductAddComponent,
        ProductEditComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {}