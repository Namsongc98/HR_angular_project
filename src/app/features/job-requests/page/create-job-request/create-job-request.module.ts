import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateJobRequestComponent } from './create-job-request.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateJobRequestComponent, ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  bootstrap: [CreateJobRequestComponent]
})
export class CreateJobRequestModule { }
