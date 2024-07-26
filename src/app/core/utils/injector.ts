import { inject } from "@angular/core";

export function getInstance(classes: any[]): any {
    let instances: any = {};
    classes.forEach((item, i) => {
        instances[(item.name).toString().toLowerCase().replace('_', '')] = inject(item);
    });
    return instances;
}