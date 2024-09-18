import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePageComponent } from './title-page/title-page.component';
import { FormsModule } from '@angular/forms';
import { ButtonCommonComponent } from './button-common/button-common.component';
import { ListStatusComponent } from './list-status/list-status.component';
import { CompoboxCommonComponent } from './compobox-common/compobox-common.component';
import { TableCommonComponent } from './table-common/table-common.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { InputCommonComponent } from './input-common/input-common.component';




@NgModule({
  declarations: [TitlePageComponent, ButtonCommonComponent, ListStatusComponent, CompoboxCommonComponent, TableCommonComponent, InputCommonComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzSelectModule,
    NzTableModule,
  ],
  exports: [TitlePageComponent, ButtonCommonComponent, ListStatusComponent, CompoboxCommonComponent, TableCommonComponent,InputCommonComponent]
})
export class SharedComponentModule { }
