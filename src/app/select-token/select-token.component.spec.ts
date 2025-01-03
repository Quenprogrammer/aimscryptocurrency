import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTokenComponent } from './select-token.component';

describe('SelectTokenComponent', () => {
  let component: SelectTokenComponent;
  let fixture: ComponentFixture<SelectTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTokenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
