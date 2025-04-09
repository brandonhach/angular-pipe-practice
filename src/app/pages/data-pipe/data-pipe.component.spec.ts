import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPipeComponent } from './data-pipe.component';

describe('DataPipeComponent', () => {
  let component: DataPipeComponent;
  let fixture: ComponentFixture<DataPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
