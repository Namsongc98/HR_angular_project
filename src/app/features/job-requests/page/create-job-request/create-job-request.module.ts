import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateJobRequestComponent } from './create-job-request.component';

import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';





@NgModule({
  declarations: [CreateJobRequestComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentModule
  ],
  bootstrap: [CreateJobRequestComponent]
})
export class CreateJobRequestModule { }
