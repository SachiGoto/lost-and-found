import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostEditComponent } from './lost-edit.component';

describe('LostEditComponent', () => {
  let component: LostEditComponent;
  let fixture: ComponentFixture<LostEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
