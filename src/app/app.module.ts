import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Added ReactiveFormsModule
import { UserDashboardComponent } from './dashboard/user-dashboard/userdashboard.component';
import { AdminDashbaordComponent } from './dashboard/admin-dashbaord/admin-dashbaord.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, // Keep LoginComponent in declarations (not standalone)
    UserDashboardComponent,
    AdminDashbaordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Required for ngModel
    ReactiveFormsModule, // Optional but good to have
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
