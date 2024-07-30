import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfigType } from '@core/models/types/mat-snackbar-config';

@Injectable({
  providedIn: 'root'
})
export class SnackbarProxyService {

  defaultConfig: MatSnackBarConfigType = {
    verticalPosition: 'top', horizontalPosition: 'center', duration: 4000, direction: 'ltr'
  };

  constructor(
    private snackBar: MatSnackBar
  ) { }

  open(message: string, action?: string, config?: MatSnackBarConfigType): void {
    this.snackBar.open(message, action, { ...this.defaultConfig, ...config });
  }

  openFromComponent<T>(component: ComponentType<T>, config?: MatSnackBarConfigType<any>): void {
    this.snackBar.openFromComponent(component, { ...this.defaultConfig, ...config });
  }

  openFromTemplate(template: TemplateRef<any>, config?: MatSnackBarConfigType): void {
    this.snackBar.openFromTemplate(template, { ...this.defaultConfig, ...config });
  }

}

