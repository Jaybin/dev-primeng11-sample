import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicklistDemoComponent } from './picklist-demo.component';

describe('PicklistComponent', () => {
  let component: PicklistDemoComponent;
  let fixture: ComponentFixture<PicklistDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicklistDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicklistDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
