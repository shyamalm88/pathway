import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrumComponent } from './scrum.component';

const routes: Routes = [
  {
    path: '',
    component: ScrumComponent,
    data: {
      title: 'Scrum'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumRoutingModule {}
