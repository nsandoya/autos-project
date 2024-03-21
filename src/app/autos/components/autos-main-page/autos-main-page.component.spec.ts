import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosMainPageComponent } from './autos-main-page.component';

describe('AutosMainPageComponent', () => {
  let component: AutosMainPageComponent;
  let fixture: ComponentFixture<AutosMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutosMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutosMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
