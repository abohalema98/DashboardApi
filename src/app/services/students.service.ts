import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Students } from '../model/students';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseUrl: string = "http://localhost:3000/api/studentsInfo";


  getStudentsList() {
    return this.http.get<Students[]>(this.baseUrl)
  }
  getStudentbyId(Id: number) {
    return this.http.get<Students>(this.baseUrl + '/' + Id)
  }

  editStudent(newStudent:any) {
    return this.http.put<Students>(this.baseUrl, newStudent)
  }

  addNewStudents(newStudent: Students) {
    // console.log(newStudent)

    return this.http.post<Students[]>(this.baseUrl, newStudent)
  }

  deleteStudent(id: number): Observable<Students> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: id,
      }
    }
    return this.http.delete<Students>(this.baseUrl, options)
  }

  constructor(private http: HttpClient) { }
}
