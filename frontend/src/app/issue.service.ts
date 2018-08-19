import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  baseUri = environment.apiPath;

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.baseUri}/issues`);
  }
  getIssueById(id) {
    return this.http.get(`${this.baseUri}/issues/${id}`);
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
      title, responsible, description, severity
    }
    return this.http.post(`${this.baseUri}/issues/add/`, issue);
  }

  updateIssue(title, responsible, description, severity, status, id) {
    const issue = {
      title, responsible, description, severity, status
    }
    return this.http.post(`${this.baseUri}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.delete(`${this.baseUri}/issues/delete/${id}`);
  }

}
