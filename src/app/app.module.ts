import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-list/employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router } from './app.route';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
// import { EmployeeService } from './employee.service';
import { PhonenumberPipe } from './phonenumber.pipe';
import { HighlightInputDirective } from './highlight-input.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { UserModule } from './user/user.module';
import { EditEmployeeComponent } from './employee-list/edit-employee/edit-employee.component';
// import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    PhonenumberPipe,
    HighlightInputDirective,
    ProfileComponent,
    HeaderComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Router),
    HttpClientModule,
    FormsModule,
    UserModule,
    ReactiveFormsModule
  ],
  providers: [],
  // providers: [EmployeeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
