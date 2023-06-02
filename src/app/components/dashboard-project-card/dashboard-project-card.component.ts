import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectInformation } from 'src/app/models/ProjectInformation';

@Component({
  selector: 'app-dashboard-project-card',
  templateUrl: './dashboard-project-card.component.html',
  styleUrls: ['./dashboard-project-card.component.css']
})
export class DashboardProjectCardComponent {

  @Input() agent!: ProjectInformation;

  constructor(
    private router: Router
  ) {

  }

  public getProject(project: ProjectInformation) {
    localStorage.setItem("project", JSON.stringify(project));
    this.router.navigateByUrl(`${project.repositoryName}`)
  }
}