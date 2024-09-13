import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { LayoutHomeComponent } from './layout-home.component';
import { LayoutApplicantModule } from 'src/app/features/applicants/layout/layout-applicants/layout-applicant.module';
import { LayoutJobRequestModule } from 'src/app/features/job-requests/layout/layout-job-request/layout-job-request.module';
import { RouterModule } from '@angular/router';
import { NavigateLayoutComponent } from '../navigate-layout/navigate-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';




@NgModule({
  declarations: [HeaderLayoutComponent,NavigateLayoutComponent, LayoutHomeComponent ],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    LayoutApplicantModule,
    LayoutJobRequestModule,
  ],
  bootstrap:[LayoutHomeComponent],
  exports: [
    LayoutHomeComponent,
  ]
})
export class LayoutHomeModule { }
