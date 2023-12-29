import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router } from './app.route';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from './user.service';
import { ConvertBooleanToStringPipe } from './convert-boolean-to-string.pipe';
import { PhonenumberPipe } from './phonenumber.pipe';
import { HighlightInputDirective } from './highlight-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    UserComponent,
    UserDetailsComponent,
    ConvertBooleanToStringPipe,
    PhonenumberPipe,
    HighlightInputDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Router),
    HttpClientModule
  ],
  providers: [UserService],
  // providers: [EmployeeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
