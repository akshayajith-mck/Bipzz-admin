import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashPromotionComponent } from './flash-promotion.component';

describe('FlashPromotionComponent', () => {
  let component: FlashPromotionComponent;
  let fixture: ComponentFixture<FlashPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
