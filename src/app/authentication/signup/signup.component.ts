import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../shared/services/http-service/http.service';
import { Router } from '@angular/router';
import { AppSettings } from '../../shared/constants/constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;
  public submitted: Boolean;
  // tslint:disable-next-line:max-line-length
  private emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
  private specialCharRegex = /^(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%])/;
  private userSignupdata;
  public succesMessage: Boolean = false;
  public errorMessage: Boolean = false;
  public alreadyUserMessage: Boolean = false;
  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router) { }

  ngOnInit() {

    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      Validators.pattern(this.specialCharRegex)
      ]],
      lastName: ['', [Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      Validators.pattern(this.specialCharRegex)
      ]],
      user: this.fb.group({
        email: ['', [Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.emailRegex)]],
        password: ['', [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(this.passwordRegex)
        ]]
      })
    });
  }



  signup(value, isValid: boolean) {
    console.log(value);
    this.submitted = true; // set form submit to true
    this.httpService.postData(AppSettings.URL + 'signup', value)
      .subscribe(
      (data): void => {
        this.userSignupdata = data;
        if (this.userSignupdata.message === 'Successfully added user') {
          this.succesMessage = true;
          this.errorMessage = false;
          const self = this;
          setTimeout(function () {
            self.router.navigate(['auth/login']);
          }, 1000);
        }else if (this.userSignupdata.message === 'Already a user') {
          this.alreadyUserMessage = true;
          const self = this;
          setTimeout(function () {
            self.router.navigate(['auth/login']);
          }, 1000);
        } else {
          this.errorMessage = true;
        }
      },
      (err): void => {
        this.errorMessage = true;
      },
    );
  }
}
