import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.myForm = this.fb.group({
      fullName: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  onSubmit(formData: FormGroup) {
    console.log(formData);
  }

  reset() {
    this.myForm.reset();
  }
}
