import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ConvertBooleanToStringPipe } from './convert-boolean-to-string.pipe';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserDetailsComponent}
]

@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    ConvertBooleanToStringPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [UserService],
  bootstrap: []

})
export class UserModule { }