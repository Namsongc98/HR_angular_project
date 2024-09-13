import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutApplicantsComponent } from './layout-applicants.component';
import { RouterModule } from '@angular/router';
import { ApplicantsModule } from '../../page/applicants/applicants.module';
import { DetailApplicantModule } from '../../page/detail-applicant/detail-applicant.module';



@NgModule({
  declarations: [LayoutApplicantsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ApplicantsModule,
    DetailApplicantModule
  ],
  exports: [
    LayoutApplicantsComponent,
  ]
})
export class LayoutApplicantModule { }
