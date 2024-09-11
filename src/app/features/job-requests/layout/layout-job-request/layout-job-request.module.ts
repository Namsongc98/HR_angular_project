import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutJobRequestComponent } from './layout-job-request.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [LayoutJobRequestComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutJobRequestComponent,
  ]
})
export class LayoutJobRequestModule { }
