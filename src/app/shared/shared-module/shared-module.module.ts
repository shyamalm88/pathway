import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { BsDropdownModule, AccordionModule } from 'ngx-bootstrap';
import { NgSpinKitModule } from 'ng-spin-kit';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    NgSpinKitModule,
    FileUploadModule
  ],
  declarations: [],
  exports: [
    BsDropdownModule,
    AccordionModule,
    NgSpinKitModule,
    FileUploadModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
