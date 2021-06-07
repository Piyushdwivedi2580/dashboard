import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalCompaingsComponent } from './referal-compaings.component';

describe('ReferalCompaingsComponent', () => {
  let component: ReferalCompaingsComponent;
  let fixture: ComponentFixture<ReferalCompaingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferalCompaingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalCompaingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
