import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberpunkAboutComponent } from './cyberpunk-about.component';

describe('CyberpunkAboutComponent', () => {
  let component: CyberpunkAboutComponent;
  let fixture: ComponentFixture<CyberpunkAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CyberpunkAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberpunkAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
