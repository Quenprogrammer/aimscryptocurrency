import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellTokenComponent } from './sell-token.component';

describe('SellTokenComponent', () => {
  let component: SellTokenComponent;
  let fixture: ComponentFixture<SellTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellTokenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
