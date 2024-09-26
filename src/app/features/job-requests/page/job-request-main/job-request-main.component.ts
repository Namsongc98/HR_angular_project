import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IButton, IDataJobRequest, IInputCompobox, IStatusItem, ListStatus } from 'src/app/module/components/components.type';
import { TitlePageComponent } from 'src/app/shared/components/title-page/title-page.component';
import { COLUMNS_JOB_REQUEST, DATA_JOB_REQUEST, LIST_COMBOBOX, LIST_STATUS_JOB_REQUEST } from 'src/app/shared/constant/constant-page/job-request/constant';

import { btnInput, createComboBoxProps, lisStatusInput, tableInput } from 'src/app/shared/function-common/functionCommon';
@Component({
  selector: 'app-job-request-main',
  templateUrl: './job-request-main.component.html',
  providers: [{
    provide: TitlePageComponent
  }]
})
export class JobRequestMainComponent implements OnInit {
  btnData: IButton = btnInput("New Job", "btn-blue", () => this.handleClickNewJob())
  listStatus: IStatusItem[] = LIST_STATUS_JOB_REQUEST
  compoboxInput = createComboBoxProps(' ', 'Select Department', LIST_COMBOBOX, '')

  tData: Array<IDataJobRequest> = DATA_JOB_REQUEST;
  dataTableJobRequest = tableInput(COLUMNS_JOB_REQUEST, this.tData)
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  handleClickNewJob(): any {
    this.router.navigate(['/job-requests/create-job-request'])
  }
  handleChangeCompobox(event: IInputCompobox): any {
    console.log('compobox', event);
  }
  handleChangeRouter(event: any,): any {
    this.router.navigate(['/job-requests', event.data.key])
  }
  handleSelectListStatus(itemClick: IStatusItem) {
    const filterData = DATA_JOB_REQUEST.filter((item) => {
      if (itemClick.status === "All")
        return true
      return item.status === itemClick.status
    })
    this.dataTableJobRequest.data = filterData
  }

}
