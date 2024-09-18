import { Component, OnInit } from '@angular/core';
import { IButton, IInputTag } from 'src/app/module/components/components.type';
import { IJob } from 'src/app/module/interface/job.interface';
import { CONSTANTS_DEPARTMENT, CONSTANTS_LEVEL } from 'src/app/shared/constant/constant';
import { btnInput, createComboBoxProps, createInputTextInput } from 'src/app/shared/function-common/functionCommon';

@Component({
  selector: 'app-create-job-request',
  templateUrl: './create-job-request.component.html',
  styleUrls: ['./create-job-request.component.scss']
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
  compoboxDepartment = createComboBoxProps('Department', 'Select department', CONSTANTS_DEPARTMENT, 'department' as keyof IJob)
  comboboxLever = createComboBoxProps('Level', 'Select level', CONSTANTS_LEVEL, 'level' as keyof IJob)
  inputJobTitle: IInputTag = createInputTextInput("Job title", 'Enter job title', 'text', this.dataCreateJob.job_title, 'job_title' as keyof IJob)


  constructor() { }

  ngOnInit(): void {
  }

  handleClickCancel() {
    console.log('cancel');
  }
  handleClickSubmit() {
    console.log('Submit');
  }



  handleChange(event: any, key: keyof IJob) {
    this.dataCreateJob[key] = event
  }

}
