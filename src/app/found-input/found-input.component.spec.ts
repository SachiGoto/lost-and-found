import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundInputComponent } from './found-input.component';

describe('FoundInputComponent', () => {
  let component: FoundInputComponent;
  let fixture: ComponentFixture<FoundInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
