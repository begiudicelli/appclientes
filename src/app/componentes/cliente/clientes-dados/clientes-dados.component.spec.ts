import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDadosComponent } from './clientes-dados.component';

describe('ClientesDadosComponent', () => {
  let component: ClientesDadosComponent;
  let fixture: ComponentFixture<ClientesDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
