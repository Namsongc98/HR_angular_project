import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogConfirmService } from 'src/app/core/services/dialog-confirm.service';
import { IDatePick } from 'src/app/module/components/components.type';
import { IDialogConfirm } from 'src/app/module/interface/common';
import { btnInput, createDateInput } from 'src/app/shared/function-common/functionCommon';

@Component({
  selector: 'app-detail-applicant',
  styleUrls: ["./detail-applicant.component.scss"],
  templateUrl: './detail-applicant.component.html'
})
export class DetailApplicantComponent implements OnInit {

  dialogSubscription!: Subscription

  btnReject = btnInput("Reject", "btn-gray", () => this.handleClickReject())
  btnSchedule1 = btnInput("Schedule Round 1", "btn-blue", () => this.handleClickSchedule())

  btnRejectConfirmNo = btnInput("No", "btn-gray", () => this.handleClickConfirmNo())
  btnRejectConfirmYes = btnInput("Yes", "btn-blue", () => this.handleClickConfirmYes())

  constructor(private dialogService: DialogConfirmService) { }

  ngOnInit(): void {

  }

  handleClickReject() {
    this.dialogService.setDialog({ isVisible: true, title: 'Are you sure to reject this candidate?', content: '', body: '', footer: [this.btnRejectConfirmNo, this.btnRejectConfirmYes] })
  }
  handleClickSchedule() {
    this.dialogService.setDialog({ isVisible: true, title: 'Schedule Round 1', content: '', body: '', footer: [] })
  }
  handleClickConfirmNo() {
    this.dialogService.closeDialog()
  }
  handleClickConfirmYes() {
    this.dialogService.closeDialog()
  }

}
