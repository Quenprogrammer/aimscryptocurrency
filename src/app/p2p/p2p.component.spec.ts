import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pComponent } from './p2p.component';

describe('P2pComponent', () => {
  let component: P2pComponent;
  let fixture: ComponentFixture<P2pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2pComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
