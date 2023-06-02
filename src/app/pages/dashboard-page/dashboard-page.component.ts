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

  currentAgentsInformation!: ProjectInformation[];
  private getAllAgents() {
    this.agentService.getAllAgents().subscribe( result => {
      this.currentAgentsInformation = result;
    });

    if(! this.currentAgentsInformation) {
      this.currentAgentsInformation = [
        {
          id: "645677d29fec02647d4420db",
          owner: "apache",
          repositoryName: "logging-log4j2",
          status: "Not Analyzed",
          about: "This is a test project",
          online: true,
          readme: ""
        },
        {
          id: "645677d29fec02647d4420db",
          owner: "apache",
          repositoryName: "logging-log4j2",
          status: "Not Analyzed",
          about: "This is a test project",
          online: false,
          readme: ""
        },
        {
          id: "645677d29fec02647d4420db",
          owner: "apache",
          repositoryName: "logging-log4j2",
          status: "Not Analyzed",
          about: "This is a test project",
          online: true,
          readme: ""
        }
      ]
    }
  }
}
