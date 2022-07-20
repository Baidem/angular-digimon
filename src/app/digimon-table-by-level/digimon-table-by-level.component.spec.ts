import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonTableByLevelComponent } from './digimon-table-by-level.component';

describe('DigimonTableByLevelComponent', () => {
  let component: DigimonTableByLevelComponent;
  let fixture: ComponentFixture<DigimonTableByLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonTableByLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonTableByLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
