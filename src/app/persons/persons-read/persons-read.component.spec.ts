import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsReadComponent } from './persons-read.component';

describe('PersonsReadComponent', () => {
  let component: PersonsReadComponent;
  let fixture: ComponentFixture<PersonsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
