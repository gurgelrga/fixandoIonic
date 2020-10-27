import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarCadastroaPage } from './listar-cadastroa.page';

describe('ListarCadastroaPage', () => {
  let component: ListarCadastroaPage;
  let fixture: ComponentFixture<ListarCadastroaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCadastroaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCadastroaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
