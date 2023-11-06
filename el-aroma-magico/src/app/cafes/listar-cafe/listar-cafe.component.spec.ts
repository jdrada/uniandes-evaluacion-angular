import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarCafeComponent } from './listar-cafe.component';
import { CafeService } from '../cafe.service';
import { of } from 'rxjs';

class MockCafeService {
  getCafes() {
    const cafes = [
      { id: 1, nombre: 'Café A', tipo: 'Café de Origen', region: 'Region A' },
      { id: 2, nombre: 'Café B', tipo: 'Blend', region: 'Region B' },
      { id: 3, nombre: 'Café C', tipo: 'Café de Origen', region: 'Region C' },
    ];
    return of(cafes);
  }
}

describe('ListarCafeComponent', () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;
  let mockCafeService: MockCafeService;

  beforeEach(async () => {
    mockCafeService = new MockCafeService();

    await TestBed.configureTestingModule({
      declarations: [ListarCafeComponent],
      providers: [{ provide: CafeService, useValue: mockCafeService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cafes from the service', () => {
    spyOn(mockCafeService, 'getCafes').and.returnValue(
      of([
        { id: 1, nombre: 'Café A', tipo: 'Café de Origen', region: 'Region A' },
        { id: 2, nombre: 'Café B', tipo: 'Blend', region: 'Region B' },
        { id: 3, nombre: 'Café C', tipo: 'Café de Origen', region: 'Region C' },
      ])
    );

    component.ngOnInit();

    expect(mockCafeService.getCafes).toHaveBeenCalled();
    expect(component.cafes.length).toBe(3);
  });

  it('should calculate totals correctly', () => {
    component.ngOnInit();

    expect(component.totalOrigen).toBe(2);
    expect(component.totalBlend).toBe(1);
  });
});
