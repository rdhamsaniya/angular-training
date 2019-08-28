import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  students : any;
  handleError : any;
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getStudents(): Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/student').pipe(
      retry(3), 
      catchError(this.handleError) 
    );
  }

  deleteStudent(id): Observable<string> {
    
    return this.http.delete<string>(`http://localhost:3000/student/${id}`);
  }

  addStudent(student): Observable<any>{
    return this.http.post<any>('http://localhost:3000/student'
    ,student,this.httpOptions);
  }

  getStudentById(id): Observable<any>{
    return this.http.get<any>(`http://localhost:3000/student/${id}`);
  }

  update(student) : Observable<any>{
    return this.http.put<any>(`http://localhost:3000/student/${student.id}`, student, this.httpOptions);
  }
}
