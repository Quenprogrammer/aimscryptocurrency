import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStatsComponent } from './data-stats.component';

describe('DataStatsComponent', () => {
  let component: DataStatsComponent;
  let fixture: ComponentFixture<DataStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
