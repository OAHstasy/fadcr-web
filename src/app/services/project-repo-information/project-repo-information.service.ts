import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectInformation } from 'src/app/models/ProjectInformation';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepoInformationService {

  constructor(private httpClient: HttpClient) { }

  private apiBaseUrl: string = "api/v1/agent"

  
  getAllAgents(): Observable<ProjectInformation> {
    const response = this.httpClient.get<ProjectInformation>(this.apiBaseUrl + "/active");
    
    return response;
  }
}
