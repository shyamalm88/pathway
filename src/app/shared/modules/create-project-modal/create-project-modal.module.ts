import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectModalComponent } from './create-project-modal.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CreateProjectModalService } from '../../services/create-project-modal-service/createProjectModal.service';
import { DialogModule } from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule,
    DialogModule
  ],
  declarations: [CreateProjectModalComponent],
  exports: [CreateProjectModalComponent],
})
export class CreateProjectModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CreateProjectModalModule,
      providers: [CreateProjectModalService]
    };
  }
}
