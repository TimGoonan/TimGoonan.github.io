import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MottoComponent } from './motto.component';

describe('MottoComponent', () => {
  let component: MottoComponent;
  let fixture: ComponentFixture<MottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
