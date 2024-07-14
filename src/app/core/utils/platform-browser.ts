import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID, inject } from "@angular/core";

export abstract class BasePlatFormBrowser {
    private isBrowser: boolean;
    platformId: any = inject(PLATFORM_ID);
    constructor() {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    protected get isInBrowser() {
        return this.isBrowser;
    }


}