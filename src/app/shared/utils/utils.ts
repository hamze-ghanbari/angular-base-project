export function parseJson(value: string) {
    let data: any;
    try {
        data = JSON.parse(value);
    } catch (e) {
        return null;
    }
    return data;
}

export let isString = (value: any, strict: boolean = false): value is String => {
     let result = value == 'string' || value == 'String' || typeof value == 'string';
    if (!strict)
        return result;
    else
        return result && !isNumber(value) && !isBoolean(value) && !isDate(value);
}

export let isNumber = (value: any): value is Number => {
    return value == 'number' || value == 'Number' || typeof value == 'number';
}

export let isBoolean = (value: any): value is boolean => {
    return value == 'boolean' || value == 'Boolean' || typeof value == 'boolean';
}

export let isDate = (value: any): value is Date => {
    return value == 'date' || value == 'Date' || value instanceof Date;
}

export let isNull = (value: any): value is null => {
    return value === null || value == 'null';
}

export let isObject = (value: any): value is Object => {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && value instanceof Date == false;
}