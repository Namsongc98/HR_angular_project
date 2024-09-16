import { Component, OnInit } from '@angular/core';

import { IButton, IStatusJobRequest, ListStatus } from 'src/app/module/components/components.type';
import { LIST_COMBOBOX, LIST_STATUS_JOB_REQUEST } from 'src/app/shared/constant/constant';
import { btnInput, createComboBoxProps, lisStatusInput } from 'src/app/shared/function-common/functionCommon';


@Component({
  selector: 'app-job-request-main',
  templateUrl: './job-request-main.component.html',
  styleUrls: ['./job-request-main.component.scss'],
})
export class JobRequestMainComponent implements OnInit {

  btnData: IButton = btnInput("New Job", "btn-blue", this.handleClickNewJob)
  listStatus: IStatusJobRequest[] = LIST_STATUS_JOB_REQUEST
  compoboxInput = createComboBoxProps(' ', 'Select Department', LIST_COMBOBOX)
  constructor() { }


  handleClickNewJob(): any {
    console.log("New Job");
  }

  ngOnInit(): void {
  }

}
