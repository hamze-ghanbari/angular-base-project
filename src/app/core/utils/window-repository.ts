import { Injectable } from "@angular/core";
import { BasePlatFormBrowser } from "./platform-browser";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class WindowRepository extends BasePlatFormBrowser {
    constructor() {
        super();
    }

    isOnline(): boolean | undefined {
        if (this.isInBrowser)
            return window.navigator.onLine;
        else
            return undefined;
    }

    copyText(value: string) {
        if (this.isInBrowser) {
            window.navigator.clipboard.writeText(value).then(() => {
                // ********
            }).catch((error) => {
                // ************* error in copy {{value}}
            });
        }
    }

    async readText(): Promise<string | undefined> {
        if (this.isInBrowser) {
            return await window.navigator.clipboard.readText();
        }
        return undefined;
    }

    isInMobile(): boolean | undefined {
        if (this.isInBrowser) {
            let userAgent = window.navigator.userAgent || navigator.vendor;
            return /android/i.test(userAgent) || /iPhone|ipad|iPod/i.test(userAgent);
        }
        return undefined
    }

    language(): string | undefined {
        if (this.isInBrowser)
            return window.navigator.language;
        else
            return undefined;
    }

    print() {
        if (this.isInBrowser)
            window.print();
    }

    setInterval(func: Function, milliseconds: number | undefined, ...args: any[]) {
        if (this.isInBrowser)
            setInterval(func, milliseconds, args);
    }

    clearInterval(intervalId: number | undefined) {
        if (this.isInBrowser)
            clearInterval(intervalId);
    }

    setTimeout(func: Function, milliseconds: number | undefined, ...args: any[]) {
        if (this.isInBrowser)
            setTimeout(func, milliseconds, args);
    }

    clearTimeout(myTimeout: number | undefined) {
        if (this.isInBrowser)
            clearTimeout(myTimeout);

    }

}