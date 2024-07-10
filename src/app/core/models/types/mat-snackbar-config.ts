import { AriaLivePoliteness } from "@angular/cdk/a11y";
import { Direction } from "@angular/cdk/bidi";
import { ViewContainerRef } from "@angular/core";
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

export type MatSnackBarConfigType<D = any> = {
       politeness?: AriaLivePoliteness;
       announcementMessage?: string;
       viewContainerRef?: ViewContainerRef;
       duration?: number;
       panelClass?: PanelClassType | PanelClassType[];
       direction?: Direction;
       data?: D | null;
       horizontalPosition?: MatSnackBarHorizontalPosition;
       verticalPosition?: MatSnackBarVerticalPosition;
};

// ***** Flexible *****
type PanelClassType = 'snack-success' | 'snack-error' | 'snack-warning' | 'snack-info';