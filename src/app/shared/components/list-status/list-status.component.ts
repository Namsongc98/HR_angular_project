import { Component, Input, OnInit } from '@angular/core';
import { IStatusJobRequest, ListStatus } from 'src/app/module/components/components.type';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.scss']
})
export class ListStatusComponent implements OnInit {
  constructor() { }

  @Input('listStatus') listStatus: IStatusJobRequest[] = []
  
  selectIdStatus: Number = 1

  ngOnInit(): void {
  }

  handleFilter(item: IStatusJobRequest) {
    this.selectIdStatus = item.id
  }

}
