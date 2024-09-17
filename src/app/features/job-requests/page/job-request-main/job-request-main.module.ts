import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRequestMainComponent } from './job-request-main.component';
import { TitlePageComponent } from 'src/app/shared/components/title-page/title-page.component';
import { ButtonCommonComponent } from 'src/app/shared/components/button-common/button-common.component';
import { ListStatusComponent } from 'src/app/shared/components/list-status/list-status.component';
import { CompoboxCommonComponent } from 'src/app/shared/components/compobox-common/compobox-common.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { TableCommonComponent } from 'src/app/shared/components/table-common/table-common.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [JobRequestMainComponent, TitlePageComponent, ButtonCommonComponent, ListStatusComponent, CompoboxCommonComponent, TableCommonComponent],
  imports: [
    CommonModule,
    NzSelectModule,
    FormsModule,
    NzTableModule,
  ],
  bootstrap: [JobRequestMainComponent]
})
export class JobRequestMainModule { }
