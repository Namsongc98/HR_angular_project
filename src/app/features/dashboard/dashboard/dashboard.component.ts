import { Component, OnInit } from '@angular/core';
import { CompletionObserver, ErrorObserver, NextObserver, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DashboardService } from 'src/app/core/services/page/dashboard/dashboard.service';
import { IColumn, IDataNewApplicants, IDataOpenedJobs, IInputTable } from 'src/app/module/components/components.type';
import { COLUMN_TABLE__NEW_APPLICANTS, COLUMN_TABLE_OPENED_JOBS, CONSTANTS_STATUS_INTERVIEWER, dataInterview, dataNewApplicants, listNumber } from 'src/app/shared/constant/constant-page/dashboard/dashboard';
import { createDateInput, tableInput } from 'src/app/shared/function-common/functionCommon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor(private _dashboardService: DashboardService) { }

  dataWeek: string = '';
  dateInterviewer = createDateInput(" ", this.dataWeek, '', '', 'This Week', 'week')

  // table new applicants
  isLoading: boolean = false;

  dataInterview = dataInterview;
  CONSTANTS_STATUS_INTERVIEWER = CONSTANTS_STATUS_INTERVIEWER;
  listNumber = listNumber;
// table new applicants
  dataTableJobRequest: {
    columns: IColumn[];
    data: any[];
  } = {
      columns: COLUMN_TABLE__NEW_APPLICANTS,
      data: [],
    }
// table opened jobs
  dataTableOpened: {
    columns: IColumn[];
    data: any[];
  } = {
      columns: COLUMN_TABLE_OPENED_JOBS,
      data: [],
    }

  ngOnInit(): void {
    this.callApiOpenedJobs();
    this.callApiNewApplicants();
  }

  callApiOpenedJobs() {
    this.isLoading = true;
    this._dashboardService.getOpenedJobs().pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (value) => {
        this.dataTableOpened = tableInput(
          COLUMN_TABLE_OPENED_JOBS,
          value
        );
      },
      error: (err) => {
        console.log(err)
        this.dataTableOpened = { columns: [], data: [] };
      },
    }
    );
  }

  callApiNewApplicants() {
    this.isLoading = true;
    this._dashboardService.getNewApplicants().pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (value) => {
        this.dataTableJobRequest = tableInput(
          COLUMN_TABLE__NEW_APPLICANTS,
          value
        );
      },
      error: (err) => {
        console.log(err)
        this.dataTableJobRequest = { columns: [], data: [] };
      },
    });
  }

  handleChange(event: unknown, name: string) {
    console.log(event);
    console.log(name);
  }
}
