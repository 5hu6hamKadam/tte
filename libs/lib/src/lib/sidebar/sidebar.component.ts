import { Component, Input } from '@angular/core';

export interface ISidebar {
  link: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'tte-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input()
  public menus!: ISidebar[];
}
