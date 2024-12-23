import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDeniedForbidden403Component } from './access-denied-forbidden-403.component';

describe('AccessDeniedForbidden403Component', () => {
  let component: AccessDeniedForbidden403Component;
  let fixture: ComponentFixture<AccessDeniedForbidden403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessDeniedForbidden403Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessDeniedForbidden403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
