import { Component, Input } from '@angular/core';

export interface IAppListItem {
  link: string;
  icon: string;
  label: string;
  rating: number;
  category: string;
}

@Component({
  selector: 'tte-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss'],
})
export class AppListComponent {
  @Input()
  public apps!: IAppListItem[];
}
