import { Component } from '@angular/core';
import { RoleService } from 'src/app/role/services/role.service';
import { UserService } from '../../services/user.service';
import { Role } from 'src/app/role/models/role';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  userList: User[] = [];
  roleList: Role[] = [];
  userToModify: User = new User();
  creatingMode: boolean = true;
  tempUser: User = new User();  // Temporary user object for form editing

  constructor(
    private userService: UserService,
    private roleService: RoleService
  ) {
    this.getAllUsers();
    this.getAllRoles();
  }

  getAllUsers() {
    this.userService.getAll().subscribe((response: User[]) => {
      this.userList = response;
    });
  }

  getAllRoles() {
    this.roleService.getAll().subscribe((response) => {
      this.roleList = response;
    });
  }

  modifyUser() {
    Object.assign(this.userToModify, this.tempUser);
    this.userService.Update(this.userToModify).subscribe(() => {
      alert('User Updated Successfully');
      window.location.reload();
    });
  }

  CreateUser() {
    const newUser = {
      userName: this.tempUser.userName,
      firstName: this.tempUser.firstName,
      lastName: this.tempUser.lastName,
      role: {
        id: this.tempUser.role.id,
      },
    };
    this.userService.Create(newUser).subscribe(() => {
      alert('User Added Successfully');
      window.location.reload();
    });
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user !!!')) {
      this.userService.Delete(userId).subscribe(() => {
        alert('User Deleted Successfully');
        window.location.reload();
      });
    }
  }

  openModel(user: User = new User()) {
    this.creatingMode = user.id === '';
    this.userToModify = user;
    this.tempUser = { ...user, role: { ...user.role } }; // Make a deep copy of the user object
  }
}
