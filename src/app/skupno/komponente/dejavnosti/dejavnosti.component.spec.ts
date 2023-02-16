import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DejavnostiComponent } from './dejavnosti.component';

describe('DejavnostiComponent', () => {
  let component: DejavnostiComponent;
  let fixture: ComponentFixture<DejavnostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DejavnostiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DejavnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
