import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IButton, IDataJobRequest, IInputCompobox, IStatusJobRequest, ListStatus } from 'src/app/module/components/components.type';
import { COLUMNS_JOB_REQUEST, DATA_JOB_REQUEST, LIST_COMBOBOX, LIST_STATUS_JOB_REQUEST } from 'src/app/shared/constant/constant';
import { btnInput, createComboBoxProps, lisStatusInput, tableInput } from 'src/app/shared/function-common/functionCommon';
@Component({
  selector: 'app-job-request-main',
  templateUrl: './job-request-main.component.html',
  styleUrls: ['./job-request-main.component.scss'],
})
export class JobRequestMainComponent implements OnInit {
  btnData: IButton = btnInput("New Job", "btn-blue", this.handleClickNewJob)
  listStatus: IStatusJobRequest[] = LIST_STATUS_JOB_REQUEST
  compoboxInput = createComboBoxProps(' ', 'Select Department', LIST_COMBOBOX)

  tData: Array<IDataJobRequest> = DATA_JOB_REQUEST;
  dataTableJobRequest = tableInput(COLUMNS_JOB_REQUEST, this.tData)
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  handleClickNewJob(): any {
    console.log("New Job");
  }
  handleChangeCompobox(event: IInputCompobox): any {
    console.log('compobox', event);
  }
  handleChangeRouter(event: any,): any {
    this.router.navigate(['/job-requests', event.data.key])
  }
  handleSelectListStatus(item: IStatusJobRequest) {
    console.log('list status', item);
  }

}
