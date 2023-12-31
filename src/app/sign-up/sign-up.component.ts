import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  myForm!: FormGroup;
  @ViewChild('signupForm') formData: NgForm;
  countrySelect = "2";
  genderRadio= 'male';
  constructor(private fb: FormBuilder) {

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
}
