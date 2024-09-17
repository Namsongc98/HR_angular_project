import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInputTable } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-table-common',
  templateUrl: './table-common.component.html',
  styleUrls: ['./table-common.component.scss']
})
export class TableCommonComponent implements OnInit {
  @Input() dataTable: IInputTable = { columns: [], data: [] }
  @Output() onDoubleClick = new EventEmitter<{ event: MouseEvent, data: any }>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataTable);
  }
  handleDoubleClick(event: MouseEvent, data: any) {
    this.onDoubleClick.emit({ event, data })
  }

}
