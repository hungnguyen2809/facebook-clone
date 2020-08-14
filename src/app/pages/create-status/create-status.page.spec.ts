import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateStatusPage } from './create-status.page';

describe('CreateStatusPage', () => {
  let component: CreateStatusPage;
  let fixture: ComponentFixture<CreateStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
