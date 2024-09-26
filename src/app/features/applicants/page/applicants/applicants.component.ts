import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDataApplicant, IStatusApplicant } from 'src/app/module/components/components.type';
import { COLUMN_TABLE_APPLICANTS, LIST_STATUS_APPLICANTS, TABLE_DATA_APPLICANTS } from 'src/app/shared/constant/constant-page/applicant/constant';
import { tableInput } from 'src/app/shared/function-common/functionCommon';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
})
export class ApplicantsComponent implements OnInit {
  listStatus: IStatusApplicant[] = LIST_STATUS_APPLICANTS
  tData: Array<IDataApplicant> = TABLE_DATA_APPLICANTS;
  dataTableJobRequest = tableInput(COLUMN_TABLE_APPLICANTS, this.tData)
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleSelectListStatus(itemClick: any) {
    const filterData = TABLE_DATA_APPLICANTS.filter((item) => {
      if (itemClick.status === "All")
        return true
      return item.status === itemClick.status
    })
    this.dataTableJobRequest.data = filterData
  }
  handleChangeRouter(event: any) {
    this.router.navigate(['/applicants', event.data.key])
  }
}
