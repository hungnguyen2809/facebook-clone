import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionsCrateStatusPage } from './actions-crate-status.page';

describe('ActionsCrateStatusPage', () => {
  let component: ActionsCrateStatusPage;
  let fixture: ComponentFixture<ActionsCrateStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsCrateStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionsCrateStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
