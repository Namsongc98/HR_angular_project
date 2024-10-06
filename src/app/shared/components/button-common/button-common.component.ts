import { Component, Input, OnInit } from '@angular/core';
import { IButton } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
})
export class ButtonCommonComponent implements OnInit {

  @Input() btnData: IButton = {
    label: '',
    styleBtn: '',
  }
  constructor() { }

  ngOnInit(): void {
    
  }
  handleClick(event: MouseEvent) {
    if (this.btnData?.onClick) {
      this.btnData.onClick(event);
    }
  }

}
