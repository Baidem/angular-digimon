import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonCarouselComponent } from './digimon-carousel.component';

describe('DigimonCarouselComponent', () => {
  let component: DigimonCarouselComponent;
  let fixture: ComponentFixture<DigimonCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
