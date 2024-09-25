import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-education',
  templateUrl: './item-education.component.html',
  styleUrls: ['./item-education.component.scss']
})
export class ItemEducationComponent implements OnInit {
  @Input() reverse: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
