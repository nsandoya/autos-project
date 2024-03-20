import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPrincipalComponent } from './tablaPrincipal.component';

describe('TablaPrincipalComponent', () => {
  let component: TablaPrincipalComponent;
  let fixture: ComponentFixture<TablaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
