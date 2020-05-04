import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RosterPage } from './roster.page';

describe('RosterPage', () => {
  let component: RosterPage;
  let fixture: ComponentFixture<RosterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RosterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
