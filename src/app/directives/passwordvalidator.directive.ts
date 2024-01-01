import { Attribute, Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appPasswordvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: PasswordvalidatorDirective,
      multi: true
    }
  ]
})
export class PasswordvalidatorDirective implements Validator {

  constructor(@Attribute('appPasswordvalidator') public PasswordControl: string) { }

  validate(control: FormControl) {
      const password = control.root.get(this.PasswordControl);
      const confirmPassword = control;

      if(!confirmPassword.value) {
        return null;
      }

      if(password) {
        const subscription : Subscription= password.valueChanges.subscribe(()=> {
          confirmPassword.updateValueAndValidity();
          subscription.unsubscribe();
        })
      }

      return password && password.value !== confirmPassword.value ? { passwordMatchError: true } : null;
  }

}
