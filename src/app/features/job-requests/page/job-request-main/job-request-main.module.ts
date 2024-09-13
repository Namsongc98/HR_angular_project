import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRequestMainComponent } from './job-request-main.component';
import { TitlePageComponent } from 'src/app/shared/components/title-page/title-page.component';
import { ButtonCommonComponent } from 'src/app/shared/components/button-common/button-common.component';
import { ListStatusComponent } from 'src/app/shared/components/list-status/list-status.component';



@NgModule({
  declarations: [JobRequestMainComponent, TitlePageComponent, ButtonCommonComponent,ListStatusComponent],
  imports: [
    CommonModule,
  ]
})
export class JobRequestMainModule { }
