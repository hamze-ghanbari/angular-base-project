import { ProviderToken, inject } from "@angular/core";

export function getInstance(...classes: any): any {
    let instances: any = {};
    console.log('classes', classes);
    classes.forEach((item: any) => {
        // console.log('item', item);
        instances[(item.name).toString().toLowerCase().replace('_', '')] = inject(item);
    });
    return instances;
}