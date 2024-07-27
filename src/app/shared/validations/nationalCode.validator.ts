import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

// export function nationalCodeValidator(): ValidatorFn {
     export function nationalCodeValidator(control: AbstractControl): ValidationErrors | null  {
        let nationalCode = control.value.trim();
        let bannedArray = ['0000000000', '1111111111', '2222222222', '3333333333', '4444444444', '5555555555', '6666666666', '7777777777', '8888888888', '9999999999'];

        if (nationalCode.length < 1) {
            return { nationalCode: control.value };
        } else if (nationalCode.length !== 10) {
            return { nationalCode: control.value };
        } else if (bannedArray.includes(nationalCode)) {
            return { nationalCode: control.value };
        } else {

            let sum = 0;

            for (let i = 0; i < 9; i++) {
                sum += nationalCode[i] * (10 - i);
            }

            let divideRemaining = sum % 11;
            let lastDigit;
            if (divideRemaining < 2) {
                lastDigit = divideRemaining;
            } else {
                lastDigit = 11 - (divideRemaining);
            }

            if (nationalCode[9] == lastDigit) {
                return null;
            } else {
                return { nationalCode: control.value };
            }

        }
    }
// }