import { Component, OnInit } from '@angular/core';
import { IStatusApplicant } from 'src/app/module/components/components.type';
import { DATA_CV, JOB_INFOR, STATUS_JOB_CV, CONSTANTS_STATUS_CV, STATUS_CV_NEXT, IStatusNext } from 'src/app/shared/constant/constant-page/job-request/constant';
import { btnInput } from 'src/app/shared/function-common/functionCommon';

@Component({
  selector: 'app-detail-job-request',
  templateUrl: './detail-job-request.component.html',
})
export class DetailJobRequestComponent implements OnInit {
  labelBtn: string = 'Close';
  btnNewJob = btnInput(this.labelBtn, 'btn-blue',()=> this.handleClickNewJob());
  inforJob = JOB_INFOR;
  listStatus: IStatusApplicant[] = STATUS_JOB_CV;
  CONSTANTS_STATUS_CV = CONSTANTS_STATUS_CV;
  STATUS_CV_NEXT: IStatusNext = STATUS_CV_NEXT;

  dataCV = DATA_CV;

  constructor() { }

  ngOnInit(): void {
    for (const key of Object.keys(this.STATUS_CV_NEXT)) {
      this.STATUS_CV_NEXT[key].forEach((item)=>{
        if (item) {
          item.onClick =  this.handleClickItemStatus;
        }
      })
    }
  }

  handleClickNewJob() {
    this.labelBtn = 'Open';
    this.btnNewJob = btnInput(this.labelBtn, 'btn-blue',()=> this.handleClickNewJob());
  }
  handleSelectListStatus(itemClick: any) {
    const filterData = DATA_CV.filter((item) => {
      if (itemClick.status === "All")
        return true
      return item.status === itemClick.value
    })
    this.dataCV = filterData
  }
  handleClickItemStatus(){
    console.log("object");
  }
}
