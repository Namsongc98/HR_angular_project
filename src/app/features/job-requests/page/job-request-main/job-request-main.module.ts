import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRequestMainComponent } from './job-request-main.component';
import { TitlePageComponent } from 'src/app/shared/components/title-page/title-page.component';



@NgModule({
  declarations: [JobRequestMainComponent,TitlePageComponent],
  imports: [
    CommonModule
  ]
})
export class JobRequestMainModule { }
