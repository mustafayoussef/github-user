import { Users } from './../../../core/models/users';
import { UsersService } from './../../../core/services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Users | any = []
  constructor(private usersService: UsersService) { this.getUsers() }
  getUsers() {
    this.usersService.getUsers(48).subscribe(data => {
      this.users = data
    })
  }
  ngOnInit(): void {
  }

}
