import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuarioeliminar } from './usuarioeliminar';

describe('Usuarioeliminar', () => {
  let component: Usuarioeliminar;
  let fixture: ComponentFixture<Usuarioeliminar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usuarioeliminar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usuarioeliminar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
