import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCoins } from './nav-coins';

describe('NavCoins', () => {
  let component: NavCoins;
  let fixture: ComponentFixture<NavCoins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCoins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCoins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
