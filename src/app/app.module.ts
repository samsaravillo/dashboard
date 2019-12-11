import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CustomMaterialModule } from './shared/material.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './dashboard/header/header.component';
import { SideNavigationComponent } from './dashboard/side-navigation/side-navigation.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { ProductDetailComponent } from './dashboard/product-detail/product-detail.component';
import { ProductAddComponent } from './dashboard/product-add/product-add.component';
import { ProductEditComponent } from './dashboard/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavigationComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
