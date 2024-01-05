import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {SignInService} from '../services/signIn.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  @ViewChild('signInForm') form : NgForm;
  signInService = inject(SignInService);
  router :Router = inject(Router);

  signIn() {
    // console.log(this.form.value.email.abc.hu);
    alert(this.form.value.email + " is logged in the application");
    this.router.navigate(['/profile']);
    this.signInService.setLoggedIn(true);

  }

  ngOnDestroy() {
    return this.form.dirty;
  }
}
