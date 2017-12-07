import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/modules/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthenticationModule { }
