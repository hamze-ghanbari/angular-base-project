import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { enAlphaRegex, faAlphaRegex } from "./regex/regex";

export function isAlphaValidator(type: 'fa' | 'en' = 'fa'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let alphaRegex = type == 'fa' ? faAlphaRegex : enAlphaRegex;
        if (!alphaRegex.test(control.value)) {
            return { alpha: control.value };
        }
        return null;
    };
}