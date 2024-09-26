import { Component, OnInit } from '@angular/core';
import { btnInput } from 'src/app/shared/function-common/functionCommon';

@Component({
  selector: 'app-detail-applicant',
  styleUrls: ["./detail-applicant.component.scss"],
  templateUrl: './detail-applicant.component.html'
})
export class DetailApplicantComponent implements OnInit {
  btnReject = btnInput("Reject", "btn-gray", this.handleClickReject)
  btnSchedule1 = btnInput("Schedule Round 1", "btn-blue", this.handleClickSchedule)

  constructor() { }

  ngOnInit(): void {
  }

  handleClickReject() {

  }
  handleClickSchedule() {

  }

}
