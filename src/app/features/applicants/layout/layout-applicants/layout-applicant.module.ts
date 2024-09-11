import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutApplicantsComponent } from './layout-applicants.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutApplicantsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutApplicantsComponent,
  ]
})
export class LayoutApplicantModule { }
