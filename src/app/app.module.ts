import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { PwLeftMainNavComponent } from './layouts/pw-left-main-nav/pw-left-main-nav.component';
import { PwLeftProjectNavComponent } from './layouts/pw-left-project-nav/pw-left-project-nav.component';
import { SharedModule } from './shared/modules/shared-module/shared-module.module';



@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    PwLeftMainNavComponent,
    PwLeftProjectNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
