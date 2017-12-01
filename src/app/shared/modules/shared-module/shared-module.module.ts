import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { BsDropdownModule, AccordionModule } from 'ngx-bootstrap';
import { NgSpinKitModule } from 'ng-spin-kit';
import { FileUploadModule } from 'ng2-file-upload';
import { GrowlModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { HttpService } from '../../services/http-service/http.service';
import { UserDataService } from '../../services/user-data-service/user-data.service';
import { ErrorDataService } from '../../services/error-data-service/error-data.service';
import { TitleService } from '../../services/title-service/title.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    NgSpinKitModule,
    FileUploadModule,
    GrowlModule,
  ],
  declarations: [],
  exports: [
    BsDropdownModule,
    AccordionModule,
    NgSpinKitModule,
    FileUploadModule,
    GrowlModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [HttpService, UserDataService, MessageService, ErrorDataService, TitleService]
    };
  }
}
