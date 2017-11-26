import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { BsDropdownModule, AccordionModule } from 'ngx-bootstrap';
import { NgSpinKitModule } from 'ng-spin-kit';
@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    NgSpinKitModule,
  ],
  declarations: [],
  exports: [
    BsDropdownModule,
    AccordionModule,
    NgSpinKitModule,
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
