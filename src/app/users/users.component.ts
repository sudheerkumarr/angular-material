import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  constructor(private httpService: HttpService) { }

  //users: Observable<User[]>

  previousPageIndex = 0;
  pageIndex = 1;
  pageSize = 6;
  length = 12;



  onChange(event) {
    console.log(event); // {previousPageIndex: 2, pageIndex: 3, pageSize: 10, length: 100}
    this.pageIndex = event.pageIndex;
    this.previousPageIndex = event.previousPageIndex;
    this.pageSize = event.pageSize;
  }
  // ngOnInit() {
  //   this.getUsers();
  // }
  // getUsers() {
  //   this.httpService.getUsers<User[]>(this.pageIndex).subscribe(
  //     {
  //       next: (data) => this.users = data,
  //       error: (e) => console.error(e),
  //       complete: () => console.info('complete')
  //     });
  // }
}

