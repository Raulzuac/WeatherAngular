import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDetailsPageComponent } from './advanced-details-page.component';

describe('AdvancedDetailsPageComponent', () => {
  let component: AdvancedDetailsPageComponent;
  let fixture: ComponentFixture<AdvancedDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
