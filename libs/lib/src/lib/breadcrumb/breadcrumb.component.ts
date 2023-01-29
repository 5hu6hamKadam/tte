import { Component, Input } from '@angular/core';

export interface IBreadcrumb {
  link: string;
  label: string;
}

@Component({
  selector: 'tte-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input()
  public breadcrumbs!: IBreadcrumb[];
}
