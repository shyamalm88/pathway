import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrumComponent } from './scrum.component';
import { ScrumRoutingModule } from './scrum-routing.module';
import { SharedModule } from '../shared/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    ScrumRoutingModule,
    SharedModule.forRoot(),
  ],
  declarations: [ ScrumComponent ]
})
export class ScrumModule { }
