import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveSprintComponent } from './active-sprint.component';

const routes: Routes = [
  {
    path: '',
    component: ActiveSprintComponent,
    data: {
      title: 'Active Sprint'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveSprintRoutingModule { }
