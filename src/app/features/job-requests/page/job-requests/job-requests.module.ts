import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRequestsComponent } from './job-requests.component';
import { TitlePageComponent } from 'src/app/shared/components/title-page/title-page.component';



@NgModule({
  declarations: [JobRequestsComponent, TitlePageComponent],
  imports: [
    CommonModule
  ],
  bootstrap:[JobRequestsComponent]
})
export class JobRequestsModule { }
