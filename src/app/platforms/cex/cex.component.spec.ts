import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CexComponent } from './cex.component';

describe('CexComponent', () => {
  let component: CexComponent;
  let fixture: ComponentFixture<CexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
