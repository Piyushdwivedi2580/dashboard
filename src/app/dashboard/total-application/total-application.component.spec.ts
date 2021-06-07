import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalApplicationComponent } from './total-application.component';

describe('TotalApplicationComponent', () => {
  let component: TotalApplicationComponent;
  let fixture: ComponentFixture<TotalApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
