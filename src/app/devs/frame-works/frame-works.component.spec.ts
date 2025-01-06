import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameWorksComponent } from './frame-works.component';

describe('FrameWorksComponent', () => {
  let component: FrameWorksComponent;
  let fixture: ComponentFixture<FrameWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameWorksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
