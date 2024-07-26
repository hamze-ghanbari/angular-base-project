import { indexType } from "@core/models/types";

export const MESSAGES: indexType = {
    HTTP_CODES: {
    400 : 'Bad Request',
    401 : 'Unauthorized',
    403 : 'Forbidden',
    404 : 'Not Found',
    500 : 'Internal Server Error',
    502 : 'Bad Gateway', 
    504 : 'Gateway Timeout', 
    },
    VALIDATIONS: {
        required: 'required error',
        minLength: 'minLength error',
        maxLength: 'maxLength error',
        alpha: 'alpha error',
        number: 'number error',
        nationalCode: 'nationaleCode error',
        phone: 'phone error',
        script: 'script error'
    }
}