import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { numberRegex } from "./regex/regex";

export function isNumberValidator(length: number = 1): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let result = false;
      if (!numberRegex.test(control.value) && control.value.length !== length) {
        result = false;
      }else
      result = true;
      return !result ? {numberLength: control.value} : null;
    };
  }