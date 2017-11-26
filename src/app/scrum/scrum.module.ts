import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrumComponent } from './scrum.component';
import { ScrumRoutingModule } from './scrum-routing.module';
import { SharedModule } from '../shared/shared-module/shared-module.module';
import { ScrumHeaderComponent } from './scrum-header/scrum-header.component';
import { VersionComponent } from './version/version.component';
import { EpicComponent } from './epic/epic.component';
import { ScrumMainComponent } from './scrum-main/scrum-main.component';

@NgModule({
  imports: [
    CommonModule,
    ScrumRoutingModule,
    SharedModule.forRoot(),
  ],
  declarations: [ ScrumComponent, ScrumHeaderComponent, VersionComponent, EpicComponent, ScrumMainComponent ]
})
export class ScrumModule { }
