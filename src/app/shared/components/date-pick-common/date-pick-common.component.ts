import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NzI18nService } from 'ng-zorro-antd/i18n';
import { IDatePick } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-date-pick-common',
  templateUrl: './date-pick-common.component.html',
})
export class DatePickCommonComponent implements OnInit {
  @Input() dataInput: IDatePick = { label: '', value: '', defaultValue: '', name: '', placeholder: '',type:'date' };
  isEnglish = false;
  @Output() onChange = new EventEmitter<string>()
  constructor(private i18n: NzI18nService) { }

  ngOnInit(): void {
  }

}
