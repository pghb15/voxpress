import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedVoicemailListComponent } from './archive-voicemail-list.component';

describe('RoleComponent', () => {
  let component: ArchivedVoicemailListComponent;
  let fixture: ComponentFixture<ArchivedVoicemailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivedVoicemailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivedVoicemailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
