import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getISOWeek } from 'date-fns';

import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { IDatePick } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-date-pick-common',
  templateUrl: './date-pick-common.component.html',
  styleUrls: ['./date-pick-common.component.scss']
})
export class DatePickCommonComponent implements OnInit {
  @Input() dataInput: IDatePick = { label: '', value: '', defaultValue: '', name: '', placeholder: '' };
  isEnglish = false;
  @Output() handleChange = new EventEmitter()
  constructor(private i18n: NzI18nService) { }

  ngOnInit(): void {
  }

}
