import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { AuthGuardService } from './shared/services/auth-service/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'backlog',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'backlog',
        loadChildren: './scrum/scrum.module#ScrumModule'
      },
      {
        path: 'activesprint',
        loadChildren: './active-sprint/active-sprint.module#ActiveSprintModule'
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
