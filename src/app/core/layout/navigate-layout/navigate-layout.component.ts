import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {listNavRoutes} from '../../../shared/constant/routes-constant'

@Component({
  selector: 'app-navigate-layout',
  templateUrl: './navigate-layout.component.html',
  styleUrls: ['./navigate-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigateLayoutComponent implements OnInit {

  constructor() { }
  listNavRoutes = listNavRoutes

  ngOnInit(): void {
  }

}
