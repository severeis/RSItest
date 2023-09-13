import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowAnimalComponent } from './show-animal.component';
import { providers } from "../../../providers";
import { FormsModule } from '@angular/forms';

describe('ShowAnimalComponent', () => {
  let component: ShowAnimalComponent;
  let fixture: ComponentFixture<ShowAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      declarations: [ ShowAnimalComponent ],
      providers
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
