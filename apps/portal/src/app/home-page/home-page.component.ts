import { Component } from '@angular/core';
import { IBreadcrumb, ISidebar, ITitleBar } from '@tte/lib';

@Component({
  selector: 'tte-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public breadcrumbs: IBreadcrumb[] = [
    {
      label: 'Home',
      link: '/',
    },
  ];
  public sidebarItems: ISidebar[] = [
    { link: '/', label: 'Home', icon: 'fas fa-home' },
    { link: '/tools', label: 'Tools', icon: 'fas fa-envelope' },
    { link: '/games', label: 'Games', icon: 'fas fa-envelope' },
    { link: '/portfolio', label: 'About', icon: 'fas fa-info-circle' },
  ];

  public titleBar: ITitleBar = {
    label: 'Portal',
    iconLink: '',
    link: '/',
  };
}
