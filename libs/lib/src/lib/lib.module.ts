import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { AppListComponent } from './app-list/app-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    BreadcrumbComponent,
    SidebarComponent,
    TitlebarComponent,
    AppListComponent,
  ],
  exports: [
    BreadcrumbComponent,
    SidebarComponent,
    TitlebarComponent,
    AppListComponent,
  ],
})
export class LibModule {}
