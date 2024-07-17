import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedVoicemailListComponent } from './assigned-voicemail-list.component';

describe('RoleComponent', () => {
  let component: AssignedVoicemailListComponent;
  let fixture: ComponentFixture<AssignedVoicemailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignedVoicemailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedVoicemailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
