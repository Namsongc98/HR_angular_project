import { Component, OnInit } from '@angular/core';
import { createDateInput } from 'src/app/shared/function-common/functionCommon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataWeek: string = '';
  dateInterviewer = createDateInput(" ", this.dataWeek, '', '', 'This Week', 'week')

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event: unknown, name: string) {
    console.log(event);
    console.log(name);
  }
}
