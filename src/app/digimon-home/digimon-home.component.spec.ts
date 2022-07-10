import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonHomeComponent } from './digimon-home.component';

describe('DigimonHomeComponent', () => {
  let component: DigimonHomeComponent;
  let fixture: ComponentFixture<DigimonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
