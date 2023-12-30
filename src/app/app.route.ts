import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-list/employee-details/employee-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProfileComponent } from "./profile/profile.component";

export const Router: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/signup'},
  {path: 'pagenotfound', component: PageNotFoundComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(x => x.UserModule), 
},
  {path: '**', redirectTo: 'pagenotfound'}
]