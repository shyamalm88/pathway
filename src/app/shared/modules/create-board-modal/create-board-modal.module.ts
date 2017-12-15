import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBoardModalComponent } from './create-board-modal.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { DialogModule } from 'primeng/primeng';
import { CreateBoardModalService } from '../../services/create-board-modal-service.1/createBoardModal.service';
@NgModule({
  imports: [
    CommonModule,
    DialogModule
  ],
  declarations: [CreateBoardModalComponent],
  exports: [CreateBoardModalComponent],
})
export class CreateBoardModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CreateBoardModalModule,
      providers: [CreateBoardModalService]
    };
  }
}
