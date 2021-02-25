import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { CustomMaterialModule } from "./shared/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { DashboardModule } from "./dashboard/dashboard.module";
import { CoursesService } from "./dashboard/courses/courses.service";
import { AuthorsService } from "./dashboard/authors/authors.service";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    DashboardModule,
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
