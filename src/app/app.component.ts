import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { SeperateNumberPipe } from '@shared/pipes/seperate-number.pipe';
import { JalaliTimePipe } from '@shared/pipes/jalali-time.pipe';
import { JalaliDatePipe } from '@shared/pipes/jalali-date.pipe';
import { PersianNumbersPipe } from '@shared/pipes/persian-numbers.pipe';
import { NumberValueDirective } from '@shared/directives/number-value.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForbiddenComponent } from '@core/components/forbidden/forbidden.component';
import { AlphaValueDirective } from '@shared/directives/alpha-value.directive';
import { ConvertNumbersToEnglishDirective } from '@shared/directives/convert-numbers-to-english.directive';
import {MatIconModule} from '@angular/material/icon';
import { MatIconDirective } from '@shared/directives/mat-icon.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSnackBarModule, MatSlideToggleModule, BaseChartDirective, LazyLoadImageModule,
    RouterLink, SeperateNumberPipe, JalaliDatePipe, JalaliTimePipe, PersianNumbersPipe, NumberValueDirective,
    ForbiddenComponent, AlphaValueDirective, ConvertNumbersToEnglishDirective, MatIconModule, MatIconDirective
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [

    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ]),
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        }),
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        }),
      ),
      transition('open <=> closed', [animate('1s')]),
      // transition('closed => open', [animate('0.5s')]),
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(100)]),
      transition('* => void', [animate(100, style({ transform: 'translateX(100%)' }))]),
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [style({ opacity: 0 }), animate('100ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(
          ':enter',
          [
            style({ opacity: 0, width: 0 }),
            stagger(50, [animate('300ms ease-out', style({ opacity: 1, width: '*' }))]),
          ],
          { optional: true },
        ),
      ]),
      transition(':decrement', [
        query(':leave', [stagger(50, [animate('300ms ease-out', style({ opacity: 0, width: 0 }))])]),
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'BaseProject';
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  date: Date = new Date();

  text: string = '';

  constructor(
  ) { }

  d(value: string) {
    this.text = value;
  }

  items: any = [
    { title: 'name1' },
    { title: 'name2' },
    { title: 'name3' },
    { title: 'name4' },
    { title: 'name5' },
    { title: 'name6' },
  ]


  remove(title: string) {
    let index = this.items.findIndex((item: any) => item.title == title);
    this.items.splice(index, 1);
  }

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [{ x: 10, y: 20 }, { x: 15, y: 9 }, { x: 200, y: 10 }],
        label: 'Series A',
        fill: true,
        tension: 0.5,
      }
    ]
  } 
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
}
