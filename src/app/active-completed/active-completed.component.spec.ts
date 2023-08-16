import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCompletedComponent } from './active-completed.component';

describe('ActiveCompletedComponent', () => {
  let component: ActiveCompletedComponent;
  let fixture: ComponentFixture<ActiveCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveCompletedComponent]
    });
    fixture = TestBed.createComponent(ActiveCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
