
const configData = {
    countString: 20,
    rangeNumber: 10000,
};

export const randomNumber = (range?: number) => {
    return Math.floor(Math.random() * (range ?? configData.rangeNumber));
}

export const randomString = () => {
    let alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let generatedString = '';
    configData.rangeNumber = alphaChars.length;
    for (let i = 0; i < configData.countString; i++) {
        generatedString += alphaChars[randomNumber()];
    }

    return generatedString.toLowerCase();
}

export const randomBoolean = () => {
    return (Math.floor(Math.random() * configData.rangeNumber) % 2) ? true : false;
}

export const randomDate = (type: 'string' | 'date' = 'date') => {
    if (type == 'date')
        return new Date(new Date().toISOString());
    else
    return new Date().toISOString();
}

export const randomArray = (array: any[]) => {
    let result: any = [];
    for (let i = 0; i < array.length; i++) {
        if (isObject(array[i]))
            result.push(generateData(array[i]));
        else if (Array.isArray(array[i]))
            result.push(randomArray(array[i]));
        else
            result.push(randomprimitiveData(array[i]));
    }
    return result;
}

export const randomArrayObject = (object: any, count: number = 2, properties: any = {}) => {
    let result: any[] = [];
    for (let i = 0; i < count; i++) {
        result.push(generateData(object));
        if (Object.keys(properties).length > 0) {
            result[i] = findProperty(result[i], properties);
            result.splice(result.indexOf(result[i]), 1, result[i]);
        }
    }
    return result;
}

export const randomObject = (object: any, properties: any = {}) => {
    let result: any;
    result = generateData(object);
    if (Object.keys(properties).length > 0)
        result = findProperty(result, properties);
    return result;
}

function findProperty(object: any, properties = {}) {
    let keys = Object.keys(properties);
    let values = Object.values(properties);
    for (let i = 0; i < Object.keys(object).length; i++) {
        if (object.hasOwnProperty(keys[i]))
            object[keys[i]] = values[i];
    }
    return object;
}

// function findProperty(object: any, properties = {}) {
// let keys = Object.keys(properties);
// let values = Object.values(properties);
// for (let i = 0; i < Object.keys(object).length; i++) {
//     if (object.hasOwnProperty(keys[i]))
//         console.log('object', (object[keys[i]]), keys[i], values[i], Object.values(object)[keys[i]]);
//     // if()
//         object[keys[i]] = values[i];
// }
// return object;

// }

// function findProperty(object: any, properties = {}) {
//     let keys = Object.keys(properties);
//     let values = Object.values(properties);
//     let indexObject = Object.keys(object);
//     for (let i = 0; i < indexObject.length; i++) {
//         // if (Object.hasOwn(object, keys[i]))
//             // if (Object.hasOwn(object, keys[i])) {
//                 // console.log('first', Object.values(object)[i]);
//                 // console.log('second', indexObject[i]);
//                 if (isObject(Object.values(object)[i])) {
//                   object[keys[i]] = findProperty(Object.values(object)[i]);
//                 object[keys[i]] = values[i];
//             } else {
//                 // console.log('keys', keys[i]);
//                 object[keys[i]] = values[i];
//             }
//         // }
//     }
//     return object;
// }

function randomprimitiveData(type: any) {
    if (isString(type, true))
        return randomString();
    if (isNumber(type))
        return randomNumber();
    if (isBoolean(type))
        return randomBoolean();
    if (isDate(type))
        return randomDate();
    if (Array.isArray(type))
        return randomArray(type);
    if (isObject(type))
        return generateData(type);
    if (isNull(type))
        return null;
}

let isString = (value: any, strict: boolean = false): value is String => {
    let result = value == 'string' || value == 'String' || typeof value == 'string';
    if (!strict)
        return result;
    else
        return result && !isNumber(value) && !isBoolean(value) && !isDate(value);
}

let isNumber = (value: any): value is Number => {
    return value == 'number' || value == 'Number' || typeof value == 'number';
}

let isBoolean = (value: any): value is boolean => {
    return value == 'boolean' || value == 'Boolean' || typeof value == 'boolean';
}

let isDate = (value: any): value is Date => {
    return value == 'date' || value == 'Date' || value instanceof Date;
}

let isNull = (value: any): value is null => {
    return value === null || value == 'null';
}

let isObject = (value: any): value is Object => {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && value instanceof Date == false;
}

function generateData(object: any) {
    let result: any = {};
    let keys = Object.keys(object);
    let values = Object.values(object);
    let type;
    for (let i = 0; i < keys.length; i++) {
        type = values[i];
        if (isString(type, true))
            result[keys[i]] = randomString();
        if (isNumber(type))
            result[keys[i]] = randomNumber();
        if (isBoolean(type))
            result[keys[i]] = randomBoolean();
        if (isDate(type))
            result[keys[i]] = randomDate();
        if (Array.isArray(type))
            result[keys[i]] = randomArray(type);
        if (isObject(type))
            result[keys[i]] = generateData(type);
        if (isNull(type))
            result[keys[i]] = null;
    }
    return result;
}