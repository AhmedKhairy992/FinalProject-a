import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsliderComponent } from './cslider.component';

describe('CsliderComponent', () => {
  let component: CsliderComponent;
  let fixture: ComponentFixture<CsliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsliderComponent]
    });
    fixture = TestBed.createComponent(CsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
