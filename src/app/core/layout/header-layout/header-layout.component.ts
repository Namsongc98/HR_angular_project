import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',

})
export class HeaderLayoutComponent implements OnInit {

  constructor() { }

  itemImageUrl = 'assets/icon/IconMenuHeader.svg';

  ngOnInit(): void {
  }

}
