import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInputTag, ITextareaTag } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-textarea-common',
  templateUrl: './textarea-common.component.html',
})
export class TextareaCommonComponent implements OnInit {
  @Input() dataInputTextarea: ITextareaTag = {
    label: '',
    placeholder: '',
    rows: '',
    cols: '',
    name: '',
    value: '',
  }
  @Output() onModelChange = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

}
