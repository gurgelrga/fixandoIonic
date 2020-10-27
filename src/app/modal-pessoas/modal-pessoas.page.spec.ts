import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPessoasPage } from './modal-pessoas.page';

describe('ModalPessoasPage', () => {
  let component: ModalPessoasPage;
  let fixture: ComponentFixture<ModalPessoasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPessoasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPessoasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
