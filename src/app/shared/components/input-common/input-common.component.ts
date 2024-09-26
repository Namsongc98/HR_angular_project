

import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IInputTag } from 'src/app/module/components/components.type';


@Component({
  selector: 'app-input-common',
  templateUrl: './input-common.component.html',
  encapsulation: ViewEncapsulation.None
})


export class InputCommonComponent implements OnInit {
  @Input() dataInput: IInputTag = {
    label: '',
    placeholder: '',
    type: '',
    value: '',
    name: '',
  }
  @Output() onModelChange = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
}
