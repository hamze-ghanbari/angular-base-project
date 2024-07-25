import { isObject, isString, isNumber, isBoolean, isNull, isDate } from "./utils";

const configData = {
    countString: 20,
    rangeNumber: 10000,
};

export const randomNumber = (range?: number): number => {
    return Math.floor(Math.random() * (range ?? configData.rangeNumber));
}

export const randomString = (): string => {
    let alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let generatedString = '';
    configData.rangeNumber = alphaChars.length;
    for (let i = 0; i < configData.countString; i++) {
        generatedString += alphaChars[randomNumber()];
    }

    return generatedString.toLowerCase();
}

export const randomBoolean = (): boolean => {
    return (Math.floor(Math.random() * configData.rangeNumber) % 2) ? true : false;
}

export const randomDate = (type: 'string' | 'date' = 'date'): string | Date => {
    if (type == 'date')
        return new Date();
    // return new Date(new Date().toISOString());
    else
        return new Date().toISOString();
}

export const randomArray = (array: any[]): unknown[] => {
    let result: any = [];
    array.forEach((item, index) => {
        if (isObject(array[index]))
            result.push(generateData(array[index]));
        else if (Array.isArray(array[index]))
            result.push(randomArray(array[index]));
        else
            result.push(randomprimitiveData(array[index]));
    });
    // for (let i = 0; i < array.length; i++) {}
    return result;
}

export const randomArrayObject = (object: any, count: number = 2, properties: any = {}): unknown[] => {
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
    let result: any = generateData(object);
    if (Object.keys(properties).length > 0)
        return findProperty(result, properties);
}

function findProperty(object: any, properties = {}) {
    let keys: string[] = Object.keys(properties);
    let values: unknown[] = Object.values(properties);
    Object.keys(object).forEach((item, index) => {
        if (object.hasOwnProperty(keys[index]))
            object[keys[index]] = values[index];
    });
    // for (let i = 0; i < Object.keys(object).length; i++) {}
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



function generateData(object: object) {
    let result: any = {};
    let keys: string[] = Object.keys(object);
    let values: unknown[] = Object.values(object);
    let type: unknown;
    keys.forEach((item, index) => {
        type = values[index];
        if (isString(type, true))
            result[keys[index]] = randomString();
        if (isNumber(type))
            result[keys[index]] = randomNumber();
        if (isBoolean(type))
            result[keys[index]] = randomBoolean();
        if (isDate(type))
            result[keys[index]] = randomDate();
        if (Array.isArray(type))
            result[keys[index]] = randomArray(type);
        if (isObject(type))
            result[keys[index]] = generateData(type);
        if (isNull(type))
            result[keys[index]] = null;
    });
    // for (let i = 0; i < keys.length; i++) {}

    return result;
}