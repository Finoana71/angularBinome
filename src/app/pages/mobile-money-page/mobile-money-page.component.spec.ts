import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMoneyPageComponent } from './mobile-money-page.component';

describe('MobileMoneyPageComponent', () => {
  let component: MobileMoneyPageComponent;
  let fixture: ComponentFixture<MobileMoneyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMoneyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMoneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
