import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsResultsComponent } from './albums-results.component';

describe('AlbumsResultsComponent', () => {
  let component: AlbumsResultsComponent;
  let fixture: ComponentFixture<AlbumsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
