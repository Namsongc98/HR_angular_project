import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRequestMainComponent } from './job-request-main.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';




@NgModule({
  declarations: [JobRequestMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentModule
  ],
  bootstrap: [JobRequestMainComponent]
})
export class JobRequestMainModule { }
