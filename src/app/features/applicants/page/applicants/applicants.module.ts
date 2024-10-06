import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantsComponent } from './applicants.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';



@NgModule({
  declarations: [ApplicantsComponent],
  imports: [
    CommonModule,
    SharedComponentModule
  ]
})
export class ApplicantsModule { }
