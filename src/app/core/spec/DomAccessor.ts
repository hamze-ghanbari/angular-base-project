import { FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DomAccessor<T> {

    constructor(private fixture: ComponentFixture<T>){}

    getDebugElement(selector: string): DebugElement {
        return this.fixture.debugElement.query(By.css(selector));
    }

    submitForm(selector: string): void {
        this.getDebugElement(selector).triggerEventHandler('ngSubmit', null);
    }

    eventElement(selector: string, event: string, parameters: any = null): void {
        this.getDebugElement(selector).triggerEventHandler(event, parameters);
    }

    getElement(selector: string): any {
        return this.getDebugElement(selector).nativeElement;
    }

    getAllElements(selector: string): DebugElement[] {
        return this.fixture.debugElement.queryAll(By.css(selector));
    }

    clickedElement(selector: string): void {
        this.getElement(selector).click();
    }

    getAllClasses(selector: string): string {
        let allClass = this.fixture.debugElement.query(By.css(selector)).classes;
        let classList = Object.keys(allClass);
        return classList.join(' ');
    }

    classElement(element: DebugElement, className: string): boolean {
        return !!element.classes[className];
    }

    getTagName(selector: string): string {
        return this.fixture.debugElement.query(By.css(selector)).name;
    }

    contentElement(selector: string): any {
        return this.getElement(selector)?.textContent;
    }

    getAttributeContent(selector: string, attribute: string | string[]): any {
        let element = this.getElement(selector);
        let attributes: any = {};
        if (Array.isArray(attribute)) {
            attribute.forEach(attr => {
                attributes[attr] = element.getAttribute(attr);
            });
            return attributes;
        }
        else {
            return element.getAttribute(attribute);
        }

    }

    getStyleElement(selector: string) {
        let allStyles: any = {};
        let attributeStyle = this.getAttributeContent(selector, 'style');
        for (let i = 0; i < attributeStyle.split('; ').length; i++) {
            allStyles[attributeStyle.split('; ')[i].split(':')[0]] = attributeStyle.split('; ')[i].split(':')[1].split(';')[0].trim('');
        }

        return allStyles;
    }

    changeInputValue(selector: string, value: any): void {
        let element = this.getElement(selector);
        element.value = value;
        element.dispatchEvent(new Event('input'));
        this.fixture.detectChanges();
    }

    getValueInput(selector: string) {
        return this.getElement(selector)?.value;
    }

    changeFormValue(formName: FormGroup, values: {}): void {
        let valueKeys = Object.keys(values);
        let formKeys = Object.keys(formName.value);
        for (let i = 0; i < formKeys.length; i++) {
            if (Object.hasOwn(formName.value, valueKeys[i])) {
                formName.controls[valueKeys[i]].setValue((values as any)[valueKeys[i]]);
            }
        }
        this.fixture.detectChanges();
    }

}