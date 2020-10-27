import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarApiPage } from './listar-api.page';

describe('ListarApiPage', () => {
  let component: ListarApiPage;
  let fixture: ComponentFixture<ListarApiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarApiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
