import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaTransportadorasComponent } from './busca-transportadoras.component';

describe('BuscaTransportadorasComponent', () => {
  let component: BuscaTransportadorasComponent;
  let fixture: ComponentFixture<BuscaTransportadorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaTransportadorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaTransportadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
