import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { IButton, IDatePick, IInputCompobox } from 'src/app/module/components/components.type';
import { IInterViewForm } from 'src/app/module/interface/interview';
import { CONST_INTERVIEWER } from 'src/app/shared/constant/constant-page/applicant/constant';
import { btnInput, createComboBoxProps, createDateInput, getAllHoursInDay, getAllMinutesInHour } from 'src/app/shared/function-common/functionCommon';

@Component({
  selector: 'app-form-detail-applicant',
  templateUrl: './form-detail-applicant.component.html',
  styleUrls: ['./form-detail-applicant.component.scss']
})
export class FormDetailApplicantComponent implements OnInit {
  schedule = 
    {
      interviewer: "",
      interviewerDate: "",
      hour:"",
      minute: ""
    }
  
  compoboxInterviewer: IInputCompobox = createComboBoxProps('Interviewer', 'Select Interviewer', CONST_INTERVIEWER, 'interviewer')
  dateStart: IDatePick = createDateInput("Start date", this.schedule.interviewerDate, '', 'interviewerDate', 'Select start date', 'date')
  hourInterviewer: IInputCompobox = createComboBoxProps(' ', '', getAllHoursInDay(), 'hour')
  minuteInterviewer: IInputCompobox = createComboBoxProps(' ', '', getAllMinutesInHour(), 'minute')

  btnCancel: IButton = btnInput("Cancel", "btn-gray", () => this.handleClickCancel())
  btnSubmit: IButton = btnInput("Submit", "btn-blue", (event) => this.handleClickSubmit(event))

  constructor(private modal: NzModalRef) { }

  ngOnInit(): void {
  }

  handleChange(event: unknown, key: keyof IInterViewForm) {
    console.log(event)
    if (typeof event === 'string') {
      this.schedule[key] = (event)
    }
    if (typeof event === "object" && event !== null) {
      this.schedule[key] = ((event as { value: string }).value);
    }
  }
  handleClickCancel() {
    this.modal.destroy();
  }
  handleClickSubmit(event: unknown) {
    this.schedule
  }

  ngAfterContentInit() {

  }

}
