import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreActionsPage } from './more-actions.page';

describe('MoreActionsPage', () => {
  let component: MoreActionsPage;
  let fixture: ComponentFixture<MoreActionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreActionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreActionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
