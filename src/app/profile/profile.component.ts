import { Component, ViewChild, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ValidateFirstName, ValidateForm } from '../custom.validator';
import { RatingInputComponent } from '../rating-input/rating-input.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  value: any = "";
  profileForm: FormGroup;
  ingredient!: string;
  newSkills;
  disabled = true;
  @ViewChild(RatingInputComponent) ratingComp;

  formbuilder = inject(FormBuilder);

  ngOnInit() {
    this.profileForm = this.formbuilder.group({
      fname: [null, [Validators.required, ValidateFirstName]],
      lname: [null, Validators.required],
      uname: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zip: [null, Validators.required],
      skills: this.formbuilder.array([new FormControl(null, Validators.required)]),
      rating: ['', Validators.required],
      abc: ['', Validators.required]
      }, 
      { validators: ValidateForm }
    )
  }

  saveProfile(profile) {
    console.log("profileForm", profile);
    console.log(profile.value);
  }
 
  ngOnChanges(values) {
    console.log("ppppppppppppp" , values);
  }
 
  getStar(stars) {
    console.log("stars", stars);
    // let value = this.ratingComp.getStar();
    // console.log("vannnnnnnnnnnnlue", value);
    this.profileForm.get('rating').setValue(stars);
  }

  addskill() {
    (<FormArray>this.profileForm.get("skills")).push(new FormControl(null, Validators.required));
  }

  removeSkill(i:number) {
    (<FormArray>this.profileForm.get("skills")).removeAt(i);
  }
}
