import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStatusItem, ListStatus } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
})
export class ListStatusComponent implements OnInit {
  constructor() { }

  @Input() listStatus: IStatusItem[] = []
  @Output() onSelect = new EventEmitter<IStatusItem>()
  
  selectIdStatus: Number = 1

  ngOnInit(): void {
  }

  handleFilter(item: IStatusItem) {
    this.onSelect.emit(item)
    this.selectIdStatus = item.id
  }

}
