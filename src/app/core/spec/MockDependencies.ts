import { ProviderToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { KeysSpy, ReturnConfigType, SpyConfigType } from '@core/models/types/spy-config';
import { Observable } from 'rxjs';

export function createSpyObject(config: Partial<SpyConfigType>): Partial<ReturnConfigType> {
    const result: Partial<ReturnConfigType> = {};
    for (const mock of Object.keys(config) as KeysSpy[]) {
        result[mock] = jasmine.createSpyObj(mock, config[mock]!.methods, config[mock]!.properties);
    }
    return result;
}

export function createSpyOn(object: any, methodName: string[]): { [prop: string]: any }  {
    let result: { [prop: string]: any } = {};
    let obj: any = TestBed.inject(object);
    for (const method of methodName) {
        Object.assign(result, {
            method: spyOn(obj, method)
        });
    }
    return result;
}

export function createSpyOnByReturn(object: any, methodName: string, returnValue: unknown) {
    let obj: any = TestBed.inject(object);
    spyOn(obj, methodName)
        .and
        .returnValue(returnValue);

    return obj;
}

// export function mockDialog(returnValue: boolean = true) {
//     let dialog = TestBed.inject(MatDialog);
//     spyOn(dialog, 'open')
//         .and
//         .returnValue({ afterClosed: () => of(returnValue) } as any);

//     return dialog;
// }

// export function mockBottomSheet(returnValue: boolean = true) {
//     let bottomSheet = TestBed.inject(MatBottomSheet);
//     spyOn(bottomSheet, 'open')
//         .and
//         .returnValue({ afterDismissed: () => of(returnValue) } as any);

//     return bottomSheet;
// }

export function makeDependecy(object: any[] | ProviderToken<unknown>) {
    
    if (Array.isArray(object)) {
        let result: any = {};
        for (let item of object) {
            result[item.name] = TestBed.inject(item);
        }
        return result;
    }else{
        return TestBed.inject(object);
    }
}

export function httpClientMock() {
    return jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete', 'head', 'patch', 'options']);
}

export function setNewActivatedRoute(spy: any, property: string): jasmine.Spy {
    return (Object.getOwnPropertyDescriptor(spy, property)!.get as jasmine.Spy<() => Observable<any>>);
}

