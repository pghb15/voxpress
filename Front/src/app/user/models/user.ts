import { Role } from "../../role/models/role";

export class User {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  role: Role;

  constructor() {
    this.id = '';
    this.userName = '';
    this.firstName = '';
    this.lastName = '';
    this.role = new Role();
  }
}
