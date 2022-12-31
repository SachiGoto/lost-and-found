import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostInputComponent } from './lost-input.component';

describe('LostInputComponent', () => {
  let component: LostInputComponent;
  let fixture: ComponentFixture<LostInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
