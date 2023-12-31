import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-list/employee-details/employee-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGaurdService } from "./services/authGuard.service";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";

export const Router: Routes = [
  {path: 'home', component: HomeComponent,  //canActivate: [AuthGaurdService], 
  // children: [
  //   {path: 'signin', component: SignInComponent, canDeactivate: [AuthGaurdService]},
  //   {path: 'signup', component: SignUpComponent, canDeactivate: [AuthGaurdService]},
  // ]
  },
  {path: 'employee', component: EmployeeListComponent, canActivate: [AuthGaurdService]},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'pagenotfound', component: PageNotFoundComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGaurdService]},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(x => x.UserModule), 
    canLoad: [AuthGaurdService],
    resolve: {userData: AuthGaurdService}
  },
  {path: '**', redirectTo: 'pagenotfound'}
]