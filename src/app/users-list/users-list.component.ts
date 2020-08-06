import { Component, OnInit } from '@angular/core';
import { UserService } from './user.sevice';
import { User } from './user.model';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((data:any) => {
      this.users = data;
    });
  }

  deleteUser() {
    this.userService.deleteUser(200).subscribe(()=> {
        this.getAllUsers();
    });
  }

}
