import { FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function ValidateFirstName(control: FormControl) :  ValidationErrors |  null {
  let value = control.value ? control.value.trim() : '';
  if (value.indexOf(' ') > -1) {
    return { invalidFirstName: true };
  }
  return null;
}

export const  ValidateForm:  ValidatorFn  = (controls:FormControl):  ValidationErrors |  null  => {
  let value = controls.get('fname').value ? controls.get('fname').value.trim() : '';
  if (value.indexOf(' ') > -1) {
    return { invalidForm: true };
  }
  return  null;
}