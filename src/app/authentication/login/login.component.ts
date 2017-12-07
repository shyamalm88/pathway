import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../../shared/services/http-service/http.service';
import { ErrorDataService } from '../../shared/services/error-data-service/error-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  private social;
  public logInForm: FormGroup;
  public submitted: Boolean;
  public userLoggedIndata;
  private loginSuccessMessage: Boolean;
  private loginUserErrorMessage: Boolean;
  private loginPasswordErrorMessage: Boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private fb: FormBuilder,
    private error: ErrorDataService
  ) {
    this.logInForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login(value, isValid: boolean) {
    this.submitted = true;
    this.httpService.addData(URL + 'login', this.logInForm.value)
      .subscribe(
      (data): void => {
        this.userLoggedIndata = data;
        if (this.userLoggedIndata.message === 'successfully logged in') {
          this.loginSuccessMessage = true;
          this.loginUserErrorMessage = false;
          this.loginPasswordErrorMessage = false;
          const self = this;
          setTimeout(function () {
            self.router.navigate(['']);
          }, 1000);
        } else if (this.userLoggedIndata.message === 'Not a register user') {
          this.loginUserErrorMessage = true;
          this.loginPasswordErrorMessage = false;
        } else {
          this.loginUserErrorMessage = false;
          this.loginPasswordErrorMessage = true;
        }
      },
      (err): void => {
        this.error.sendErrorData(err);
      },
    );
  }
}
