import { Injectable } from "@angular/core";
import { BasePlatFormBrowser } from "./platform-browser";
import { Location } from "@angular/common";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class WindowRepository extends BasePlatFormBrowser {
    constructor(
        private location: Location
    ) {
        super();
    }

    forward(): void {
        if (this.isInBrowser) {
            this.location.forward();
        }
    }

    back(): void {
        if (this.isInBrowser) {
            this.location.back();
        }
    }

    reload(): void {
        if(this.isInBrowser){
            window.location.reload();
        }
    }


    isOnline(): boolean | undefined {
        if (this.isInBrowser)
            return window.navigator.onLine;
        else
            return undefined;
    }

    copyText(value: string): void {
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

    print(): void {
        if (this.isInBrowser)
            window.print();
    }

    setInterval(func: Function, milliseconds: number | undefined, ...args: any[]): void {
        if (this.isInBrowser)
            setInterval(func, milliseconds, args);
    }

    clearInterval(intervalId: number | undefined): void {
        if (this.isInBrowser)
            clearInterval(intervalId);
    }

    setTimeout(func: Function, milliseconds: number | undefined, ...args: any[]): void {
        if (this.isInBrowser)
            setTimeout(func, milliseconds, args);
    }

    clearTimeout(myTimeout: number | undefined): void {
        if (this.isInBrowser)
            clearTimeout(myTimeout);

    }

}