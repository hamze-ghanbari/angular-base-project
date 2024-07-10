import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function requiredValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return (control.value).toString().trim().length < 1 ? {required: control.value} : null;
    };
  }