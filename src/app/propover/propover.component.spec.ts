import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropoverComponent } from './propover.component';

describe('PropoverComponent', () => {
  let component: PropoverComponent;
  let fixture: ComponentFixture<PropoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
