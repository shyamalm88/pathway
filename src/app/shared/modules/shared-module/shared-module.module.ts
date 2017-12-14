import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { BsDropdownModule, AccordionModule, PopoverModule } from 'ngx-bootstrap';
import { NgSpinKitModule } from 'ng-spin-kit';
import { FileUploadModule } from 'ng2-file-upload';
import { GrowlModule, DialogModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { HttpService } from '../../services/http-service/http.service';
import { UserDataService } from '../../services/user-data-service/user-data.service';
import { ErrorDataService } from '../../services/error-data-service/error-data.service';
import { TitleService } from '../../services/title-service/title.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProjectModalService } from '../../services/create-project-modal-service/createProjectModal.service';
import { CreateProjectModalModule } from '../create-project-modal/create-project-modal.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    PopoverModule.forRoot(),
    NgSpinKitModule,
    FileUploadModule,
    GrowlModule,
    DialogModule,
    CreateProjectModalModule
  ],
  declarations: [],
  exports: [
    BsDropdownModule,
    AccordionModule,
    PopoverModule,
    NgSpinKitModule,
    FileUploadModule,
    GrowlModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    CreateProjectModalModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [HttpService, UserDataService, MessageService, ErrorDataService, TitleService, CreateProjectModalService]
    };
  }
}
