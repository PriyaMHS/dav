import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  @ViewChild('signInForm') form : NgForm;
  router :Router = inject(Router);
  signIn() {
    alert(this.form.value.email + " is logged in the application");
    this.router.navigate(['/profile']);

  }

  ngOnDestroy() {
    return this.form.dirty;
  }
}
