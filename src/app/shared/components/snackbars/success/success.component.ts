import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {

  constructor(
    public snackBarRef: MatSnackBarRef<SuccessComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ){}

  close(){
    this.snackBarRef.dismiss();
  }

}
