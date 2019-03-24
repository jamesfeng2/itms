import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';

import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { COMMON_ROUTES } from './shared/routes/common-pages.routes';

const appRoutes: Routes = [

  { path: '', component: FullLayoutComponent, children: Full_ROUTES },
  { path: '', component: ContentLayoutComponent, children: COMMON_ROUTES },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
