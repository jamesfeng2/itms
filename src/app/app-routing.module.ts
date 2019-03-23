import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './pages/layouts/full/full-layout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'pages/login', pathMatch: 'full',}, 
  { path: 'FullLayoutComponent', component:},
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}