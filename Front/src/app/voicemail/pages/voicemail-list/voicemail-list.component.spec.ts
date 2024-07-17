import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicemailListComponent } from './voicemail-list.component';

describe('RoleComponent', () => {
  let component: VoicemailListComponent;
  let fixture: ComponentFixture<VoicemailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoicemailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoicemailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
