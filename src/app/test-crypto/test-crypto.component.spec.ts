import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCryptoComponent } from './test-crypto.component';

describe('TestCryptoComponent', () => {
  let component: TestCryptoComponent;
  let fixture: ComponentFixture<TestCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCryptoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
