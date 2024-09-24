import { Component, OnInit } from '@angular/core';
import { COLUMN_TABLE__NEW_APPLICANTS, COLUMN_TABLE_OPENED_JOBS, CONSTANTS_STATUS_INTERVIEWER, dataInterview, dataNewApplicants, listNumber } from 'src/app/shared/constant/constant-page/dashboard/dashboard';
import { createDateInput, tableInput } from 'src/app/shared/function-common/functionCommon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataWeek: string = '';
  dateInterviewer = createDateInput(" ", this.dataWeek, '', '', 'This Week', 'week')

  dataInterview = dataInterview;
  CONSTANTS_STATUS_INTERVIEWER = CONSTANTS_STATUS_INTERVIEWER;
  listNumber = listNumber;

  dataTableJobRequest = tableInput(
    COLUMN_TABLE__NEW_APPLICANTS,
    dataNewApplicants,
  )
  dataTableOpened = tableInput(
    COLUMN_TABLE_OPENED_JOBS,
    dataNewApplicants,
  )


  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event: unknown, name: string) {
    console.log(event);
    console.log(name);
  }
}
