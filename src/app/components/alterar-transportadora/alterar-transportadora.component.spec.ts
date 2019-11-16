import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarTransportadoraComponent } from './alterar-transportadora.component';

describe('AlterarTransportadoraComponent', () => {
  let component: AlterarTransportadoraComponent;
  let fixture: ComponentFixture<AlterarTransportadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarTransportadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarTransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
