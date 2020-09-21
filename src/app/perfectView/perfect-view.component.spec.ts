import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectViewComponent } from './perfect-view.component';

describe('PerfectViewComponent', () => {
  let component: PerfectViewComponent;
  let fixture: ComponentFixture<PerfectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
