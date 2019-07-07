import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankcomComponent } from './bankcom.component';

describe('BankcomComponent', () => {
  let component: BankcomComponent;
  let fixture: ComponentFixture<BankcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
