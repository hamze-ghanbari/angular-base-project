import { isPlatformBrowser } from "@angular/common";
import { Injectable, Inject, PLATFORM_ID, InjectionToken } from "@angular/core";

@Injectable(
    {
        providedIn: `root`
    }
)
export class LocalRepository {
    private isInBrowser: boolean;
    private isLocalStorageSupported: boolean;

    constructor(
        @Inject(PLATFORM_ID) private platformId: InjectionToken<Object>
    ) {
        this.isInBrowser = isPlatformBrowser(this.platformId);
        this.isLocalStorageSupported = typeof (localStorage) !== "undefined";
    }

    public get IsInMobile(): boolean {
        let userAgent = navigator.userAgent || navigator.vendor;
        let mobile = /android/i.test(userAgent) || /iPhone|ipad|iPod/i.test(userAgent);
        return mobile;
    }

    public get IsInBrowser(): boolean {
        return this.isInBrowser;
    }

    public setItem(key: string, value: string) {
        if (this.isInBrowser && this.isLocalStorageSupported)
            localStorage.setItem(key, value);
    }

    public setItemAs<T>(key: string, value: T) {
        if (this.isInBrowser && this.isLocalStorageSupported) {
            const data = JSON.stringify(value);
            localStorage.setItem(key, data);
        }
    }

    public getItem(key: string): string | undefined {
        if (this.isInBrowser && this.isLocalStorageSupported) {
            return localStorage.getItem(key) || undefined
        }
        return undefined;
    }

    public getItemAs<T>(key: string): T | undefined {
        let data: T;
        if (this.isInBrowser && this.isLocalStorageSupported) {
            const foundItem = localStorage.getItem(key) || '';
            data = JSON.parse(foundItem) as T;
            return data
        }
        return undefined;
    }

    public clear() {
        if (this.isInBrowser && this.isLocalStorageSupported)
            localStorage.clear();
    }

    public removeItem(key: string) {
        if (this.isInBrowser && this.isLocalStorageSupported)
            localStorage.removeItem(key);
    }

}