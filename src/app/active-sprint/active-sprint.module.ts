import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveSprintRoutingModule } from './active-sprint-routing.module';
import { ActiveSprintComponent } from './active-sprint.component';
import { ActiveSprintHeaderComponent } from './active-sprint-header/active-sprint-header.component';
import { SharedModule } from '../shared/modules/shared-module/shared-module.module';
import { SprintProgressComponent } from './sprint-progress/sprint-progress.component';

@NgModule({
  imports: [
    CommonModule,
    ActiveSprintRoutingModule,
    SharedModule,
  ],
  declarations: [ActiveSprintComponent, ActiveSprintHeaderComponent, SprintProgressComponent]
})
export class ActiveSprintModule { }
