import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCidadeComponent } from './lista-cidade.component';

describe('ListaCidadeComponent', () => {
  let component: ListaCidadeComponent;
  let fixture: ComponentFixture<ListaCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
