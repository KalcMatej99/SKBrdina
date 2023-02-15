import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecajiComponent } from './tecaji.component';

describe('TecajiComponent', () => {
  let component: TecajiComponent;
  let fixture: ComponentFixture<TecajiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecajiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
