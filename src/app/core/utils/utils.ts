export function parseJson<T>(value: string): T | null {
    let data: T;
    try {
        data = JSON.parse(value);
    } catch (e) {
        return null;
    }
    return data;
}

export const localStorageSupported = () => typeof Storage !== undefined;

export const webWorkerSupported = () => typeof Worker !== undefined;

export const isString = (value: any, strict: boolean = false): value is String => {
     let result = value == 'string' || value == 'String' || typeof value == 'string';
    if (!strict)
        return result;
    else
        return result && !isNumber(value) && !isBoolean(value) && !isDate(value);
}

export const isNumber = (value: any): value is Number => {
    return value == 'number' || value == 'Number' || typeof value == 'number';
}

export const isBoolean = (value: any): value is boolean => {
    return value == 'boolean' || value == 'Boolean' || typeof value == 'boolean';
}

export const isDate = (value: any): value is Date => {
    return value == 'date' || value == 'Date' || value instanceof Date;
}

export const isNull = (value: any): value is null => {
    return value === null || value == 'null';
}

export const isObject = (value: any): value is Object => {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && value instanceof Date == false;
}