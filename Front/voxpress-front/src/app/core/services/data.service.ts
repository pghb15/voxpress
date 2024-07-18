import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Inject ApiUrl in constructor to Get it form ather Service
  constructor(
    @Inject(String) private APIUrl: string,
    private http: HttpClient
  ) {}

  // Get Method
  getAll(): Observable<any> {
    return this.http.get<any>(this.APIUrl);
  }
  // Get with id
  get(id: any): Observable<any> {
    return this.http.get(`${this.APIUrl}/${id}`);
  }

  // Get with name
  find(name: any): Observable<any> {
    return this.http.get(`${this.APIUrl}/${name}`);
  }

  // Get with username
  look(username: any): Observable<any> {
    return this.http.get(`${this.APIUrl}/${username}`);
  }


  // Update Method
  Update(data: any): Observable<any> {
    return this.http.put(`${this.APIUrl}`, data);
  }
  // Create Method
  Create(data: any): Observable<any> {
    return this.http.post(this.APIUrl, data);
  }
  // Delete Method
  Delete(id: any): Observable<any> {
    return this.http.delete(`${this.APIUrl}/${id}`);
  }

  getInboxVoicemails(): Observable<any> {
    return this.http.get(`${this.APIUrl}/inbox`);
  }

  getArchivedVoicemails(): Observable<any> {
    return this.http.get(`${this.APIUrl}/archived`);
  }

  getAssignedVoicemails(): Observable<any> {
    return this.http.get(`${this.APIUrl}/assigned`);
  }


}
