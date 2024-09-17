import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStatusJobRequest, ListStatus } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.scss']
})
export class ListStatusComponent implements OnInit {
  constructor() { }

  @Input() listStatus: IStatusJobRequest[] = []
  @Output() onSelect = new EventEmitter<IStatusJobRequest>()
  
  selectIdStatus: Number = 1

  ngOnInit(): void {
  }

  handleFilter(item: IStatusJobRequest) {
    this.onSelect.emit(item)
    this.selectIdStatus = item.id
  }

}
