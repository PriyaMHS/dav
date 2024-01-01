import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  @ViewChild('signupForm') formData: NgForm;
  countrySelect = "2";
  genderRadio= 'male';
  constructor() {

  }

  signUp() {
    console.log(this.formData);
    console.log(this.formData.value);
  }

  reset() {
    this.formData.form.reset();
    this.formData.form.patchValue({
      inlineRadioOptions: 'male',
      country: "2"
    })
  }

  ngOnDestroy() {
    return this.formData.dirty;
  }
}
