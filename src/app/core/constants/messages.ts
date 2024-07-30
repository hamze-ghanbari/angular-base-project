import { indexType } from "@core/models/types";

export const MESSAGES: indexType = {
    HTTP_CODES: {
        // 0: 'Unknown Error',
        // 400: 'Bad Request',
        // 401: 'Unauthorized',
        // 403: 'Forbidden',
        // 404: 'Not Found',
        // 500: 'Internal Server Error',
        // 502: 'Bad Gateway',
        // 504: 'Gateway Timeout',
        0: 'خطای سیستمی',
        400: 'درخواست اشتباه',
        401: 'خطای احراز هویت',
        403: 'عدم دسترسی',
        404: 'پیدا نشد',
        500: 'خطای داخلی سرور',
        502: 'سرور به طور موقت غیرقابل دسترسی است',
        504: 'Gateway Timeout',
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