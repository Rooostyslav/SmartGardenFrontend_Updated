import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/models/users/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'update', 'delete'];
  pageSizes: number[] = [5, 10, 20];

  constructor(
    private userService: UserService
  ) { 
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe(result => {
        this.dataSource.data = result;
      });
  }

  deleteUser(userId: number) {
    this.userService.getById(userId)
      .subscribe(result => {
        if (confirm("Delete user " + result.fullName +" ?")) {
          this.userService.delete(userId)
            .subscribe(result => {
              alert("Deleted user " + result.fullName + " successed.");
            });
        }
      });
  }
}
