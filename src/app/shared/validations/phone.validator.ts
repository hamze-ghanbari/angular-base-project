import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { phoneRegex } from "./regex/regex";

export function phoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let result = true;
      if (!(phoneRegex).test(control.value)) {
          result = false;
      }
      return !result ? {phone: control.value} : null;
    };
  }