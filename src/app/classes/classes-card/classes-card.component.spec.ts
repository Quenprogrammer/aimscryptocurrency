import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesCardComponent } from './classes-card.component';

describe('ClassesCardComponent', () => {
  let component: ClassesCardComponent;
  let fixture: ComponentFixture<ClassesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
