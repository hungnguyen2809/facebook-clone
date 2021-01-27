import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChitietPage } from './chitiet.page';

describe('ChitietPage', () => {
  let component: ChitietPage;
  let fixture: ComponentFixture<ChitietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChitietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
