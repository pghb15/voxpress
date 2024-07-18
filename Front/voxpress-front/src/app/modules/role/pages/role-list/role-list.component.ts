import { Component } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
})
export class RoleListComponent {
  roleList: Role[] = [];
  newRole: Role = new Role();
  creatingMode: boolean = true;
  tempRole: Role = new Role();  // Temporary role object for form editing

  constructor(private roleService: RoleService) {
    this.getAllRoles();
  }

  getAllRoles() {
    this.roleService.getAll().subscribe((response: Role[]) => {
      this.roleList = response;
    });
  }

  deleteRole(roleId: string) {
    if (confirm('Are you sure you want to delete this role !!!')) {
      this.roleService.Delete(roleId).subscribe(() => {
        alert('Role Deleted Successfully');
        window.location.reload();
      });
    }
  }

  createRole() {
    const newRole = {
      roleName: this.tempRole.roleName,
      roleDescription: this.tempRole.roleDescription,
    };
    this.roleService.Create(newRole).subscribe(() => {
      alert('Role Created Successfully');
      window.location.reload();
    });
  }

  modifyRole() {
    Object.assign(this.newRole, this.tempRole);
    this.roleService.Update(this.newRole).subscribe(() => {
      alert('Role Updated Successfully');
      window.location.reload();
    });
  }

  openModel(role: Role = new Role()) {
    this.creatingMode = role.id === '';
    this.newRole = role;
    this.tempRole = { ...role }; // Make a deep copy of the role object
  }
}
