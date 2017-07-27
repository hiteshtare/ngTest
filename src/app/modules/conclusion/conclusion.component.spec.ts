import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule, PanelModule } from 'primeng/primeng'; // PrimeNG modules

import { StorageService } from './../../shared/services/storage.service';
import { IndianCurrencyPipe } from './../../shared/pipes/indian-currency.pipe';
import { ConclusionComponent } from './conclusion.component';

describe('ConclusionComponent', () => {
  let component: ConclusionComponent;
  let fixture: ComponentFixture<ConclusionComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusionComponent, IndianCurrencyPipe],
      imports: [BrowserAnimationsModule,
        FieldsetModule,
        PanelModule],
      providers: [StorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusionComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    debugger;
  });
});
