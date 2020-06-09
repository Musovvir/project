import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouJobComponent } from './you-job.component';

describe('YouJobComponent', () => {
  let component: YouJobComponent;
  let fixture: ComponentFixture<YouJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
