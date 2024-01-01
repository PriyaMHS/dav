import { Component, inject } from '@angular/core';
import { AbstractControlOptions, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ValidateFirstName, ValidateForm } from '../custom.validator';

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

  formbuilder = inject(FormBuilder);

  ngOnInit() {
    this.profileForm = this.formbuilder.group({
      fname: [null, [Validators.required, ValidateFirstName]],
      lname: [null, Validators.required],
      uname: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zip: [null, Validators.required],
      skills: this.formbuilder.array([])
    }, {validators:ValidateForm} as  AbstractControlOptions
    )
  }

  get skills() : FormArray {
    return this.profileForm.get("skills") as FormArray
  }

  comparisonValidator(g: FormGroup) {

  }
 
  newSkill(): FormGroup {
    return this.formbuilder.group({
      skill: ''
    })
  }

  saveProfile(profile) {
    console.log("profileForm", profile);
    console.log(profile.value);
  }
 
 

  addskill() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
}
