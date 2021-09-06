import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaTrackerComponent } from './corona-tracker.component';

describe('CoronaTrackerComponent', () => {
  let component: CoronaTrackerComponent;
  let fixture: ComponentFixture<CoronaTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
