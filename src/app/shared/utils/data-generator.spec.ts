import { TestBed } from '@angular/core/testing';
import { randomArray, randomArrayObject, randomBoolean, randomDate, randomNumber, randomObject, randomString } from './data-generator';

fdescribe('dataGenerator', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({});
  });

  it('#1__randomNumber method', () => {
    let number;
    expect(number).toBeUndefined();
    number = randomNumber();
    expect(number).not.toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).toBeInstanceOf(Number);
    expect(number).toBeLessThanOrEqual(10000);
    number = randomNumber(50000000);
    expect(number).toBeLessThanOrEqual(50000000);
  });

  it('#2__randomString method', () => {
    let string;
    expect(string).toBeUndefined();
    string = randomString();
    expect(string).not.toBeUndefined();
    expect(string).not.toBeNull();
    expect(string).toBeInstanceOf(String);
    expect(string.length).toEqual(20);
  });

  it('#3__randomBoolean method', () => {
    let boolean;
    expect(boolean).toBeUndefined();
    boolean = randomBoolean();
    expect(boolean).not.toBeUndefined();
    expect(boolean).not.toBeNull();
    expect(boolean).toBeInstanceOf(Boolean);
  });
 
  it('#4__randomDate method', () => {
    let date;
    expect(date).toBeUndefined();
    date = randomDate();
    expect(date).not.toBeUndefined();
    expect(date).not.toBeNull();
    expect(date).toBeInstanceOf(Date);
    date = randomDate('string');
    expect(date).toBeInstanceOf(String);
  });

  it('#5__randomArray method', () => {
    let array;
    expect(array).toBeUndefined();
    array = randomArray(['', 0, new Date(), true]);
    expect(array).not.toBeUndefined();
    expect(array).not.toBeNull();
    expect(array).toHaveSize(4);
    expect(array[0]).toBeInstanceOf(String);
    expect(array[1]).toBeInstanceOf(Number);
    expect(array[2]).toBeInstanceOf(Date);
    expect(array[3]).toBeInstanceOf(Boolean);
  });

  it('#6__randomObject method', () => {
    let object;
    expect(object).toBeUndefined();
    object = randomObject({title: '', age: 'number'});
    expect(object).not.toBeUndefined();
    expect(object).not.toBeNull();
    expect(object).toBeInstanceOf(Object);
    expect(object['title']).toBeInstanceOf(String);
    expect(object['age']).toBeInstanceOf(Number);
    object = randomObject({title: '', age: 'number'}, {age: 20});
    expect(object['age']).toBe(20);
  });

  it('#7__randomArrayObject method', () => {
    let array;
    expect(array).toBeUndefined();
    array = randomArrayObject({title: '', age: 'number'});
    expect(array).not.toBeUndefined();
    expect(array).not.toBeNull();
    expect(array).toHaveSize(2);
    array = randomArrayObject({title: '', age: 'number'}, 5);
    expect(array).toHaveSize(5);
    array = randomArrayObject({title: '', age: 'number'}, 5, {age: 20});
    expect(array[0]['age']).toBe(20);
  });

});
 

