import { Component } from '@angular/core';
import { IAppListItem, IBreadcrumb, ISidebar, ITitleBar } from '@tte/lib';

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
    { link: '/games', label: 'Games', icon: 'fas fa-gamepad' },
    { link: '/portfolio', label: 'About', icon: 'fas fa-briefcase' },
  ];

  public titleBar: ITitleBar = {
    label: 'Portal',
    iconLink: '',
    link: '/',
  };

  public games: IAppListItem[] = [
    {
      link: '/games/typing-tutor',
      icon: 'fas fa-gamepad',
      label: 'Typing tutor',
      rating: 4,
      category: 'Puzzle',
    },
    {
      link: 'https://example.com/app2',
      icon: 'fas fa-folder-open',
      label: 'Memory',
      rating: 3,
      category: 'Memory',
    },
  ];
}
