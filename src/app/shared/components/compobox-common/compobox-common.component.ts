import { Component, Input, OnInit } from '@angular/core';
import { IInputCompobox } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-compobox-common',
  templateUrl: './compobox-common.component.html',
  styleUrls: ['./compobox-common.component.scss'],
})
export class CompoboxCommonComponent implements OnInit {

  @Input() inputCompobox: IInputCompobox = { label: '', placeholder: '', listDataComboBox: [] }
  selectedValue: any;

  constructor() { }

  ngOnInit(): void {
    if (this.inputCompobox.listDataComboBox.length > 0) {
      this.selectedValue = this.inputCompobox.listDataComboBox[0];  
    }
  }

  onChange(event: any): void {
    console.log("Selected value:", event);
  }
}
