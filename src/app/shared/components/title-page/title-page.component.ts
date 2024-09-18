import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  constructor(private location: Location) { }

  @Input() title = "";
  @Input() backRouter = false
  BackRouterIcon = "assets/icon/BackRouterIcon.svg"

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }

}
