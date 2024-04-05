import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookModelsComponent } from './book-models.component';

describe('BookModelsComponent', () => {
  let component: BookModelsComponent;
  let fixture: ComponentFixture<BookModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookModelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
