import { Injector, inject } from "@angular/core";

// let appInjectorRef: Injector;

// export function appInjector(injector?: Injector): Injector {
//     if (!injector) {
//         return appInjectorRef;
//     }
//     appInjectorRef = injector;
//     return appInjectorRef;
// }

export function getInstance(classes: any[]): any {
    let instances: any = {};
    classes.forEach((item, i) => {
        instances[(item.name).toString().toLowerCase().replace('_', '')] = inject(item);
    });
    return instances;
}