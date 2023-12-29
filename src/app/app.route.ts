import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserComponent } from "./user/user.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

export const Router: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/signup'},
  {path: 'pagenotfound', component: PageNotFoundComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserDetailsComponent},
  {path: '**', redirectTo: 'pagenotfound'}
]