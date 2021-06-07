import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalApplicationCandidateComponent } from './total-application-candidate.component';

describe('TotalApplicationCandidateComponent', () => {
  let component: TotalApplicationCandidateComponent;
  let fixture: ComponentFixture<TotalApplicationCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalApplicationCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalApplicationCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
