import { Person } from './../persons/models/person';
import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>('localhost:8080/person/all');
  }
  public create(person: Person): Observable<Person> {
    return this.http.post<Person>('localhost:8080/person', person);
  }
}
