import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplyComponent } from './deply.component';

describe('DeplyComponent', () => {
  let component: DeplyComponent;
  let fixture: ComponentFixture<DeplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
