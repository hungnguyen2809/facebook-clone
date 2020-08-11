import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FbCardAllContentComponent } from './fb-card-all-content.component';

describe('FbCardAllContentComponent', () => {
  let component: FbCardAllContentComponent;
  let fixture: ComponentFixture<FbCardAllContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbCardAllContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FbCardAllContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
