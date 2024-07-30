import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatIconDirective } from '@shared/directives/mat-icon.directive';
import { NumberValueDirective } from '@shared/directives/number-value.directive';
import { phoneValidator } from '@shared/validations/phone.validator';

@Component({
  selector: 'app-login-presentation',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, NgClass, MatIconModule, MatIconDirective, NumberValueDirective,],
  templateUrl: './login-presentation.component.html',
  styleUrl: './login-presentation.component.scss'
})
export class LoginPresentationComponent implements OnInit {
  loginForm: any;
  @Input({required: true}) loading: boolean = false;
  @Output() loginEmit: EventEmitter<{phoneNumber: string}> = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [phoneValidator()]]
    });
  }

  login(){
    if(this.loginForm.valid){
      this.loginEmit.emit(this.loginForm.value);
    }else{
      this.loginForm.controls['phoneNumber'].setErrors({'phone': true});
    }
  }
}
