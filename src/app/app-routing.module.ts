import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './pages/layouts/full/full-layout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'pages/login', pathMatch: 'full'}, 
  { path: '', component: FullLayoutComponent},
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}