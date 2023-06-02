import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProjectInfoPageComponent } from './pages/project-info-page/project-info-page.component';

const routes: Routes = [
  {path: '', component: DashboardPageComponent},
  {path: 'project/:repositoryName', component: ProjectInfoPageComponent}];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload', 
}
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
