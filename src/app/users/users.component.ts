import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.fetchUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
