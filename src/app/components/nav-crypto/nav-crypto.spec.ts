import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCrypto } from './nav-crypto';

describe('NavCrypto', () => {
  let component: NavCrypto;
  let fixture: ComponentFixture<NavCrypto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCrypto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCrypto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
