import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export type routeType = 'r' | 'sl';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() routeSelect = new EventEmitter<routeType>();
  constructor() {}
  onSelect(route: routeType) {
    this.routeSelect.emit(route);
  }
  ngOnInit(): void {}
}
