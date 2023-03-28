import { Component } from '@angular/core';
import { ProjectInformation } from 'src/app/models/ProjectInformation';
import { AgentService } from 'src/app/services/agent/agent.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  constructor(
    private agentService: AgentService
  ) {}

  ngOnInit() {
    this.getAllAgents();
  }

  currentAgentsInformation: ProjectInformation[] = [
    {
      readme: "string",
      createdAt: "string",
      numberOfCommits: 123,
      owner: "string",
      repoName: "project2"
    },
    {
      readme: "string",
      createdAt: "string",
      numberOfCommits: 123,
      owner: "string",
      repoName: "project1"
    }
  ];
  private getAllAgents() {
    this.agentService.getAllAgents().subscribe( result => {
      this.currentAgentsInformation = result;
    });
  }
}
