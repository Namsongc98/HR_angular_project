import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailJobRequestComponent } from './detail-job-request.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';



@NgModule({
  declarations: [DetailJobRequestComponent],
  imports: [
    CommonModule,
    SharedComponentModule
  ],
  bootstrap:[DetailJobRequestComponent]
})
export class DetailJobRequestModule { }
