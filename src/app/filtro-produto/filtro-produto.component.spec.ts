import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroProdutoComponent } from './filtro-produto.component';

describe('FiltroProdutoComponent', () => {
  let component: FiltroProdutoComponent;
  let fixture: ComponentFixture<FiltroProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
