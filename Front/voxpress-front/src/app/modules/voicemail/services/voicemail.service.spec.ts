import { TestBed } from '@angular/core/testing';
import { RoleService } from 'src/app/role/services/role.service';


describe('RoleService', () => {
  let service: RoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
