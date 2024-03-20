import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDetailPageComponent } from './auto-detail-page.component';

describe('AutoDetailPageComponent', () => {
  let component: AutoDetailPageComponent;
  let fixture: ComponentFixture<AutoDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
