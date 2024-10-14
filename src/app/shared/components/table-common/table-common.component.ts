import { setClassNameColumnsTable } from './../../function-common/functionCommon';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInputTable } from 'src/app/module/components/components.type';
import { CONSTANTS_ACTION, CONSTANTS_STATUS_CV } from '../../constant/constant-page/job-request/constant';

@Component({
  selector: 'app-table-common',
  templateUrl: './table-common.component.html',

})
export class TableCommonComponent implements OnInit {
  @Input() dataTable: IInputTable  = { columns: [], data: [] }
  @Output() onDoubleClick = new EventEmitter<{ event: MouseEvent, data: any }>()

  constructor() { }
  ngOnInit(): void {
  }
  handleDoubleClick(event: MouseEvent, data: any) {
    this.onDoubleClick.emit({ event, data })
  }
  setClassNameColumnsTable(columns: any, data: any) {
    const classNameTable = setClassNameColumnsTable(columns, CONSTANTS_STATUS_CV, CONSTANTS_ACTION, data)
    return classNameTable
  }

}
