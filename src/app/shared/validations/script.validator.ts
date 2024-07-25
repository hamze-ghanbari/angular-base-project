import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { scriptRegex } from "./regex/regex";

export function scriptValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (scriptRegex.test(control.value)) {
            return { script: control.value };
        }
        return null;
    };
}