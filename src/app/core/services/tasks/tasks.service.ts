// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
export interface CreateTaskRequest {
  title: string;
  description: string;
  dueDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = 'http://localhost:5164/api/Tasks';

  constructor(private http: HttpClient) {}

  getMyTasks(page: number = 1): Observable<Task[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token || ''}`,
      Accept: 'application/json',
    });
    const params = new HttpParams().set('Page', page.toString());

    return this.http.get<Task[]>(`${this.apiUrl}/mytasks`, { headers, params });
  }

  // Get All Tasks - Admin Api
  getAllTasks(page: number = 1): Observable<Task[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token || ''}`,
      Accept: 'application/json',
    });

    const params = new HttpParams().set('Page', page.toString());

    return this.http.get<Task[]>(`${this.apiUrl}/all`, {
      headers,
      params,
    });
  }

  createTask(payload: CreateTaskRequest): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token || ''}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, payload, { headers });
  }

  updateTask(id: string, payload: any): Observable<any> {
    const headers = this.authHeaders();
    return this.http.put(`${this.apiUrl}/${id}`, payload, { headers });
  }

  // Update Tasks Status - Admin
  updateTaskStatus(taskId: string, isCompleted: boolean): Observable<any> {
    const headers = this.authHeaders();

    return this.http.put(
      `${this.apiUrl}/${taskId}/status`,
      { isCompleted },
      { headers }
    );
  }

  private authHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }
}
