import { Component, OnInit } from '@angular/core';
import { IButton, IDatePick, IInputCompobox, IInputTag, ITextareaTag } from 'src/app/module/components/components.type';
import { IJob } from 'src/app/module/interface/job.interface';
import { CONSTANTS_DEPARTMENT, CONSTANTS_LEVEL } from 'src/app/shared/constant/constant-page/job-request/constant';

import { btnInput, createComboBoxProps, createDateInput, createInputTextInput, createTextareaInput } from 'src/app/shared/function-common/functionCommon';

@Component({
  selector: 'app-create-job-request',
  templateUrl: './create-job-request.component.html',
})
export class CreateJobRequestComponent implements OnInit {

  dataCreateJob: IJob = {
    job_title: "",
    department: '',
    skills: '',
    level: '',
    start_date: '',
    end_date: '',
    number_of_vacancies: '',
    number_of_interviews: '',
    description: ''
  }

  btnCancel: IButton = btnInput("Cancel", "btn-gray", () => this.handleClickCancel())
  btnSubmit: IButton = btnInput("Submit", "btn-blue", () => this.handleClickSubmit())
  compoboxDepartment: IInputCompobox = createComboBoxProps('Department', 'Select department', CONSTANTS_DEPARTMENT, 'department')
  comboboxLever: IInputCompobox = createComboBoxProps('Level', 'Select level', CONSTANTS_LEVEL, 'level')
  inputJobTitle: IInputTag = createInputTextInput("Job title", 'Enter job title', 'text', this.dataCreateJob.job_title, 'job_title')
  inputSkills: IInputTag = createInputTextInput("Skills", 'Enter skills', 'text', this.dataCreateJob.skills, 'skills')
  inputVacancies: IInputTag = createInputTextInput("Number of vacancies", 'Enter number', 'number', this.dataCreateJob.number_of_vacancies, 'number_of_vacancies')
  inputInterviews: IInputTag = createInputTextInput("Number of interviews", 'Enter number', 'number', this.dataCreateJob.number_of_interviews, 'number_of_interviews')
  textareaJobDescription: ITextareaTag = createTextareaInput("Job description", 'Enter job description', '5', '50', 'description', this.dataCreateJob.description,)
  dateStart: IDatePick = createDateInput("Start date", this.dataCreateJob.start_date, '', 'start_date', 'Select start date', 'date')
  dateEnd: IDatePick = createDateInput("End date", this.dataCreateJob.end_date, '', 'end_date', 'Select end date', 'date')


  constructor() { }

  ngOnInit(): void {
  }

  handleClickCancel() {
    console.log('cancel');
  }
  handleClickSubmit() {
    console.log(this.dataCreateJob)
  }

  handleChange(event: unknown, key: keyof IJob) {
    if (typeof event === 'string') {
      this.dataCreateJob[key] = event
    }
    if (typeof event === "object" && event !== null) {
      this.dataCreateJob[key] = (event as { value: string }).value;
    }
  }

}
