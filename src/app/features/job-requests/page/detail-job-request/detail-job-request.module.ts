import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailJobRequestComponent } from './detail-job-request.component';



@NgModule({
  declarations: [DetailJobRequestComponent],
  imports: [
    CommonModule
  ],
  bootstrap:[DetailJobRequestComponent]
})
export class DetailJobRequestModule { }
