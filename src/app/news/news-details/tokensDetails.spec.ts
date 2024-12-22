import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensDetails } from './tokensDetails';

describe('NewsDetailsComponent', () => {
  let component: TokensDetails;
  let fixture: ComponentFixture<TokensDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokensDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokensDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
