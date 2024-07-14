import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@core/tokens/tokens';
import { ConfigService } from '@core/services/helper-service/config.service';
import { SnackbarProxyService } from '@core/services/proxy-service/snackbar-proxy.service';
import {MatTable, MatTableModule} from '@angular/material/table';
import { randomArrayObject, randomObject } from '@shared/utils/data-generator';
import { listFadeAnimation, listShakeAnimation } from '@shared/animations/animations';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { nationalCodeValidator } from '@shared/validations/nationalCode.validator';
import { isNumberValidator } from '@shared/validations/isNumber.validator';
import { isAlphaValidator } from '@shared/validations/isAlpha.validator';
import { MatIconDirective } from '@shared/directives/mat-icon.directive';
import { MatIconModule } from '@angular/material/icon';
import { ConvertNumbersToEnglishDirective } from '@shared/directives/convert-numbers-to-english.directive';
import { NumberValueDirective } from '@shared/directives/number-value.directive';
import { JalaliDatePipe } from '@shared/pipes/jalali-date.pipe';
import { JalaliTimePipe } from '@shared/pipes/jalali-time.pipe';
import { PersianNumbersPipe } from '@shared/pipes/persian-numbers.pipe';
import { SeperateNumberPipe } from '@shared/pipes/seperate-number.pipe';
import { DismissEventDirective } from '@shared/directives/dismiss-event.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DismissEventDirective, MatTableModule, ReactiveFormsModule, MatIconDirective, SeperateNumberPipe, JalaliDatePipe, JalaliTimePipe, PersianNumbersPipe, NumberValueDirective,
    ConvertNumbersToEnglishDirective, MatIconModule, MatIconDirective, NumberValueDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [listShakeAnimation, listFadeAnimation, ]
})
export class HomeComponent implements OnInit {
  // displayedColumns: string[] = ['title'];
  // @ViewChild(MatTable) table: MatTable<any> | undefined;
  list: any[] = [
    { title: '1'},
    { title: '2'},
    { title: '3'},
    { title: '4'},
    { title: '5'}
  ];
  form: any;
  rowNumber: number = 10;
  date: Date = new Date();
  text: string = '';
  constructor(
    private configService: ConfigService,
    @Inject(API_URL) private apiUrl: string,
    private snackBarService: SnackbarProxyService,
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      name : ['', isAlphaValidator()],
      lastName : ['', isAlphaValidator('en')],
      nationalCode : ['', nationalCodeValidator()],
      age: ['', isNumberValidator()],

    })
    console.log('API_URL', this.apiUrl);
    console.log('config', this.configService.config);
  }
  ngOnInit(): void {
  }

  formSubmit(){
    console.log('value', this.form.value);
  }

  addToList(){
    this.list.unshift({
      title: ++this.rowNumber
    });
    // this.table?.renderRows();
  }

  removeFromList(title: string){
  let index = this.list.findIndex(item => item.title == title);
    this.list.splice(index, 1);
    // this.table?.renderRows();
  }


  snack(){
    this.snackBarService.open('ثبت فرم با موفقیت انجام شد', 'X', {
      panelClass: 'snack-success'
    });
  }
}
