import { isPlatformBrowser } from "@angular/common";
import { Injectable, Inject, PLATFORM_ID, InjectionToken } from "@angular/core";
import { BasePlatFormBrowser } from "./platform-browser";
import { localStorageSupported } from "./utils";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class LocalRepository extends BasePlatFormBrowser {
    private isLocalStorageSupported: boolean;

    constructor() {
        super();
        this.isLocalStorageSupported = localStorageSupported();
    }

    private localSupported(): boolean{
        return this.isInBrowser && this.isLocalStorageSupported
    }

     setItem(key: string, value: string): void {
        if (this.localSupported())
            localStorage.setItem(key, value);
    }

     setItemAs<T>(key: string, value: T): void {
        if (this.localSupported()) {
            const data = JSON.stringify(value);
            localStorage.setItem(key, data);
        }
    }

     getItem(key: string): string | undefined {
        if (this.localSupported()) {
            return localStorage.getItem(key) || undefined
        }
        return undefined;
    }

     getItemAs<T>(key: string): T | undefined {
        let data: T;
        if (this.localSupported()) {
            const foundItem = localStorage.getItem(key) || '';
            data = JSON.parse(foundItem) as T;
            return data
        }
        return undefined;
    }

     clear(): void {
        if (this.localSupported())
            localStorage.clear();
    }

     removeItem(key: string): void {
        if (this.localSupported())
            localStorage.removeItem(key);
    }

}