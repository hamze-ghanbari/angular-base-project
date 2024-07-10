import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { numberRegex } from "./regex/regex";

export function isNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value.match(numberRegex)) {
          return  {number: control.value};
      }
      return null;
    };
  }