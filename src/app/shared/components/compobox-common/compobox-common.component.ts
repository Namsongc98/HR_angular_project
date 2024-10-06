import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ICompobox, IInputCompobox } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-compobox-common',
  templateUrl: './compobox-common.component.html',
  styleUrls: ['./compobox-common.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class CompoboxCommonComponent implements OnInit {

  @Input() inputCompobox: IInputCompobox = { label: '', placeholder: '', listDataComboBox: [] };
  @Output() onChange = new EventEmitter<IInputCompobox>()
  selectedValue: any;

  constructor() { }

  ngOnInit(): void {
  }

}
