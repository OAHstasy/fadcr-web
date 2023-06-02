import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardProjectCardComponent } from './components/dashboard-project-card/dashboard-project-card.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AddProjectButtonComponent } from './components/add-project-button/add-project-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectInfoPageComponent } from './pages/project-info-page/project-info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardProjectCardComponent,
    DashboardPageComponent,
    AddProjectButtonComponent,
    ProjectInfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
