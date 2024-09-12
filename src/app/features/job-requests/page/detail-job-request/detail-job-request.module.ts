import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailJobRequestComponent } from './detail-job-request.component';
import { TitlePageComponent } from 'src/app/shared/components/title-page/title-page.component';



@NgModule({
  declarations: [DetailJobRequestComponent,TitlePageComponent],
  imports: [
    CommonModule
  ]
})
export class DetailJobRequestModule { }
