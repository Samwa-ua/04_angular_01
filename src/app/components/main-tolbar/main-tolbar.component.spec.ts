import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTolbarComponent } from './main-tolbar.component';

describe('MainTolbarComponent', () => {
  let component: MainTolbarComponent;
  let fixture: ComponentFixture<MainTolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
