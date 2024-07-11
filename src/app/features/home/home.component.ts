import { Component, ElementRef, Inject, OnInit, TemplateRef, ViewChild, ViewEncapsulation, afterNextRender, afterRender } from '@angular/core';
import { isHttpResponse } from '@core/utils/http';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@core/tokens/tokens';
import { ConfigService } from '@core/services/helper-service/config.service';
import { SnackbarProxyService } from '@core/services/proxy-service/snackbar-proxy.service';
import { DismissEventDirective } from 'ngx-helper-directives';
import { SuccessComponent } from '@shared/components/snackbars/success/success.component';
import { ErrorComponent } from '@shared/components/snackbars/error/error.component';
import {MatTable, MatTableModule} from '@angular/material/table';
import { listAnimation, listAnimation2 } from 'ngx-ham-animations';
import { randomArrayObject, randomObject } from '@shared/utils/data-generator';
import { listFadeAnimation, listShakeAnimation } from '@shared/animations/animations';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { nationalCodeValidator } from '@shared/validations/nationalCode.validator';
import { requiredValidator } from '@shared/validations/required.validator';
import { isNumberValidator } from '@shared/validations/isNumber.validator';
import { isAlphaValidator } from '@shared/validations/isAlpha.validator';
import { MatIconDirective } from '@shared/directives/mat-icon.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DismissEventDirective, MatTableModule, ReactiveFormsModule, MatIconDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [listShakeAnimation, listFadeAnimation, ]
})
export class HomeComponent implements OnInit {
  isHover: boolean = true;
  displayedColumns: string[] = ['title'];
  @ViewChild(MatTable) table: MatTable<any> | undefined;
  list: any[] = [
    { title: '1'},
    { title: '2'},
    { title: '3'},
    { title: '4'},
    { title: '5'}
  ];
  form: any;
  constructor(
    private configService: ConfigService,
    private httpClient: HttpClient,
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
    // console.log('config', this.configService?['timeOut']);
    console.log('API_URL', this.apiUrl);
    console.log('config', this.configService.config);
  }
  ngOnInit(): void {

    
    this.httpClient.get(`${this.apiUrl}/users`).subscribe({
      next(value) {
        console.log('next', value);
      },
      error(err) {
        console.log('error', err);
      },
      complete() {
        console.log('request completed');
      }
    });
  }

  formSubmit(){
    console.log('value', this.form.value);
  }

  nu: number = 10;
  add: boolean = false;
  addToList(){
    this.add = true;
    this.list.unshift({
      title: ++this.nu
    });
    this.table?.renderRows();
  }

  removeFromList(title: string){
  let index = this.list.findIndex(item => item.title == title);
    this.list.splice(index, 1);
    this.table?.renderRows();
  }


  snack(){
    console.log(randomArrayObject({title: 'hamze', age: 'number', fullName: {
      firstName: 'string',
      lastName: 'string'
    }}, 7, {fullName: {firstName: 'hamze'}}));
    // this.snackBarService.open('ثبت فرم با موفقیت انجام شد', 'X', {
    //   panelClass: 'snack-warning'
    // });

    // this.snackBarService.openFromComponent(SuccessComponent, {
    //   data: {
    //     title : 'موفقیت'
    //   }
    // });
  }

  snackE(){
    this.snackBarService.open('خطا در ثبت اطلاعات', 'X', {
      panelClass: ['snack-info']
    });
    }
}
