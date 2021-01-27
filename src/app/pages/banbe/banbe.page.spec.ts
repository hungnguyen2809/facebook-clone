import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BanbePage } from './banbe.page';

describe('BanbePage', () => {
  let component: BanbePage;
  let fixture: ComponentFixture<BanbePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanbePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BanbePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
