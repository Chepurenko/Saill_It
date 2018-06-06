import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailPageComponent } from './datail-page.component';

describe('DatailPageComponent', () => {
  let component: DatailPageComponent;
  let fixture: ComponentFixture<DatailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
