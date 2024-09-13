import { Component, Input, OnInit } from '@angular/core';
import { IButton } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
  styleUrls: ['./button-common.component.scss']
})
export class ButtonCommonComponent implements OnInit {

  @Input() btnData: IButton = {
    label: '',
    styleBtn: '',
    onClick: () => { }
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
