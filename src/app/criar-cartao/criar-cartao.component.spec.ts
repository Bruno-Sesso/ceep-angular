import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCartaoComponent } from './criar-cartao.component';

describe('CriarCartaoComponent', () => {
  let component: CriarCartaoComponent;
  let fixture: ComponentFixture<CriarCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
