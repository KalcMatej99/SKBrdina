import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekmovalnaComponent } from './tekmovalna.component';

describe('TekmovalnaComponent', () => {
  let component: TekmovalnaComponent;
  let fixture: ComponentFixture<TekmovalnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekmovalnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TekmovalnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
