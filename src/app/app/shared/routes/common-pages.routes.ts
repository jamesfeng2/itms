import { Routes, RouterModule } from '@angular/router';

// Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const COMMON_ROUTES: Routes = [
     {
        path: 'pages',
        loadChildren: './pages/common-pages/common-pages.module#CommonPagesModule'
    }
];
