import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarAutoComponent } from './borrar-auto.component';

describe('BorrarAutoComponent', () => {
  let component: BorrarAutoComponent;
  let fixture: ComponentFixture<BorrarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrarAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorrarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
