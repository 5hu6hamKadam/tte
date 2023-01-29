import { Component, Input } from '@angular/core';
export interface ITitleBar {
  label: string;
  iconLink: string;
  link: string;
}

@Component({
  selector: 'tte-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss'],
})
export class TitlebarComponent {
  @Input()
  public titlebar!: ITitleBar;
}
