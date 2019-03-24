import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'pages/dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },

  {
    path: 'pages/calendar',
    loadChildren: '../../pages/calendar/calendar.module#CalendarsModule'
  },
  {
    path: 'pages/search',
    loadChildren: '../../pages/search/search.module#SearchModule'
  },
  {
    path: 'pages/chart',
    loadChildren: '../../pages/ngx-charts/ngx-charts.module#NgrxChartsModule'
  },


  {
    path: 'pages/taskboard',
    loadChildren: '../../pages/taskboard-ngrx/taskboard-ngrx.module#TaskboardNGRXModule'
  },
  {
    path: 'pages/release',
    loadChildren: '../../pages/inbox/inbox.module#InboxModule'
  },
];
