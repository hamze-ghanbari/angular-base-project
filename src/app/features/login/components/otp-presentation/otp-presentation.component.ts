import { AsyncPipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatIconDirective } from '@shared/directives/mat-icon.directive';
import { NumberValueDirective } from '@shared/directives/number-value.directive';
import { isNumberValidator } from '@shared/validations/isNumber.validator';
import { requiredValidator } from '@shared/validations/required.validator';
import { timer, map, takeWhile, Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-otp-presentation',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, NgClass, MatIconModule, MatIconDirective, NumberValueDirective,
    AsyncPipe
  ],
  templateUrl: './otp-presentation.component.html',
  styleUrl: './otp-presentation.component.scss'
})
export class OtpPresentationComponent implements OnInit {
  otpForm: any;
  showTimer: boolean;
  timer$: Observable<number>;
  @Input({ required: true }) loading: boolean = false;
  @Input({required: true}) otpSent: boolean = false;
  @Input({ required: true }) phoneNumber: string;
  @Output() confirmEmit: EventEmitter<{ otp: number }> = new EventEmitter();
  @Output() resendCode: EventEmitter<void> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp: ['', [requiredValidator(), Validators.minLength(5), Validators.maxLength(5)]]
    });

    this.timer();
  }

  timer() {
    this.showTimer = true;
    this.timer$ = timer(0, 1000).pipe(
      finalize(() => {
        this.showTimer = false;
      }),
      map(n => 120 - n),
      takeWhile(n => n > 0),
    );
  }

  confirm() {
    if (this.otpForm.valid) {
      this.confirmEmit.emit(this.otpForm.value);
    } else {
      this.otpForm.controls['otp'].setErrors({ 'minLength': true });
    }
  }

  resendOtpCode() {
    if (!this.showTimer) {
      this.resendCode.emit();
      if(this.otpSent){
        this.timer();
      }
    }
  }
}
