import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'https://reqres.in/api';

  getUsers(pageNo: number) {
    console.log(pageNo)
    return this.http.get(`${this.baseUrl}/users?page=${pageNo}`);
  }
}
