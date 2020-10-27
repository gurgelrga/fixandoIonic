import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaApi2Page } from './lista-api2.page';

describe('ListaApi2Page', () => {
  let component: ListaApi2Page;
  let fixture: ComponentFixture<ListaApi2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaApi2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaApi2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
