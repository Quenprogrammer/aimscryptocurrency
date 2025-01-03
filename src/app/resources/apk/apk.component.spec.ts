import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApkComponent } from './apk.component';

describe('ApkComponent', () => {
  let component: ApkComponent;
  let fixture: ComponentFixture<ApkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
