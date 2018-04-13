import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasHomeComponent } from './ofertas-home.component';

describe('OfertasHomeComponent', () => {
  let component: OfertasHomeComponent;
  let fixture: ComponentFixture<OfertasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
