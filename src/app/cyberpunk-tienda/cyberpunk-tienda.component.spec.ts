import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberpunkTiendaComponent } from './cyberpunk-tienda.component';

describe('CyberpunkTiendaComponent', () => {
  let component: CyberpunkTiendaComponent;
  let fixture: ComponentFixture<CyberpunkTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CyberpunkTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberpunkTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
