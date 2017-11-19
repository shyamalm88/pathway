import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { NavDropdownDirective } from './shared/nav-dropdown.directive';
import { SidebarToggleDirective } from './shared/sidebar.directive';
import { PwLeftMainNavComponent } from './layouts/pw-left-main-nav/pw-left-main-nav.component';
import { PwLeftProjectNavComponent } from './layouts/pw-left-project-nav/pw-left-project-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    BreadcrumbsComponent,
    NavDropdownDirective,
    SidebarToggleDirective,
    PwLeftMainNavComponent,
    PwLeftProjectNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
