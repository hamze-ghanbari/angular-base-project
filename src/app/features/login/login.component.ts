import { Component, OnInit } from '@angular/core';
import { LoginService } from '@core/services/http-service/login.service';
import { finalize } from 'rxjs';
import { OtpPresentationComponent } from './components/otp-presentation/otp-presentation.component';
import { LoginPresentationComponent } from './components/login-presentation/login-presentation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatIconDirective } from '@shared/directives/mat-icon.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [OtpPresentationComponent, LoginPresentationComponent, MatIconModule, MatIconDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  logoSrc: string = '../../../assets/images/logo.png';
  loginLoading: boolean = false;
  phoneNumberEntered: boolean = false;
  phoneNumber: string;
  title: string = 'موسسه حقوقی ...';
  otpSent: boolean = false;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  login(event: { phoneNumber: string }) {
    this.loginLoading = true;
    this.loginService.login(event.phoneNumber).pipe(
      finalize(() => this.loginLoading = false)
    ).subscribe(res => {
      if (!res.hasError) {
        console.log('response', res);
        this.phoneNumberEntered = true;
        this.phoneNumber = event.phoneNumber;
      }else{
        // error messages
      }
    });
  }

  confirm(event: { otp: number }) {
    this.loginLoading = true;
    this.loginService.confirm(this.phoneNumber, event.otp).pipe(
      finalize(() => this.loginLoading = false)
    ).subscribe(res => {
      if (!res.hasError) {
        this.phoneNumberEntered = true;
        this.router.navigate(['/dashboard']);
      }
    });
  }

  resendCode(){
    this.loginService.resendOtpCode(this.phoneNumber).pipe().subscribe(res => {
      // if(!res.hasError){
        // زمانی که سرویس خطا نداشت باید دوباره تایمر نمایش داده شود
        this.otpSent = true;
      // }
    });
  }

  back() {
    this.loginLoading = false;
    this.phoneNumberEntered = false;
  }




}
