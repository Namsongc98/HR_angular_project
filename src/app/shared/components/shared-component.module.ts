import { NzModalModule } from 'ng-zorro-antd/modal';
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
import { TextareaCommonComponent } from './textarea-common/textarea-common.component';
import { DatePickCommonComponent } from './date-pick-common/date-pick-common.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { FormDetailApplicantComponent } from '../component-page/applicant/form-detail-applicant/form-detail-applicant.component';


@NgModule({
  declarations: [TitlePageComponent, ButtonCommonComponent, ListStatusComponent, CompoboxCommonComponent, TableCommonComponent, InputCommonComponent, TextareaCommonComponent, DatePickCommonComponent, ModalConfirmComponent,FormDetailApplicantComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzSelectModule,
    NzTableModule,
    NzDatePickerModule,
    NzModalModule
  ],
  exports: [TitlePageComponent, ButtonCommonComponent, ListStatusComponent, CompoboxCommonComponent, TableCommonComponent, InputCommonComponent, TextareaCommonComponent, DatePickCommonComponent,ModalConfirmComponent,FormDetailApplicantComponent]
})
export class SharedComponentModule { }
