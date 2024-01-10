import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './dashboard/user-dashboard/userdashboard.component';
import { AdminDashbaordComponent } from './dashboard/admin-dashbaord/admin-dashbaord.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'userdashboard', component: UserDashboardComponent },
  { path: 'admindashbaord', component: AdminDashbaordComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

