import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIToolsComponent } from './aitools.component';

describe('AIToolsComponent', () => {
  let component: AIToolsComponent;
  let fixture: ComponentFixture<AIToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
