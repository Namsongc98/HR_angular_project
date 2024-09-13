import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutJobRequestComponent } from './layout-job-request.component';
import { RouterModule } from '@angular/router';
import { JobRequestMainModule } from '../../page/job-request-main/job-request-main.module';
import { CreateJobRequestModule } from '../../page/create-job-request/create-job-request.module';
import { DetailJobRequestModule } from '../../page/detail-job-request/detail-job-request.module';






@NgModule({
  declarations: [LayoutJobRequestComponent],
  imports: [
    CommonModule,
    RouterModule,
    JobRequestMainModule,
    CreateJobRequestModule,
    DetailJobRequestModule
  ],
  bootstrap:[LayoutJobRequestComponent],
})
export class LayoutJobRequestModule { }
