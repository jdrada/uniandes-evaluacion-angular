import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';
import { faker } from '@faker-js/faker';

describe('CafeService', () => {
  let service: CafeService;
  let httpMock: HttpTestingController;
  let dummyCafes: Cafe[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService],
    });
    service = TestBed.inject(CafeService);
    httpMock = TestBed.inject(HttpTestingController);

    const mockData1 = new Cafe(
      faker.number.int(),
      faker.commerce.product(),
      faker.commerce.productAdjective(),
      faker.location.direction(),
      faker.commerce.productMaterial(),
      faker.number.int(),
      faker.internet.url()
    );
    const mockData2 = new Cafe(
      faker.number.int(),
      faker.commerce.product(),
      faker.commerce.productAdjective(),
      faker.location.direction(),
      faker.commerce.productMaterial(),
      faker.number.int(),
      faker.internet.url()
    );
    const mockData3 = new Cafe(
      faker.number.int(),
      faker.commerce.product(),
      faker.commerce.productAdjective(),
      faker.location.direction(),
      faker.commerce.productMaterial(),
      faker.number.int(),
      faker.internet.url()
    );

    dummyCafes = [mockData1, mockData2, mockData3];
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve cafes from the API via GET', () => {
    service.getCafes().subscribe((cafes) => {
      expect(cafes.length).toBe(dummyCafes.length);
      expect(cafes).toEqual(dummyCafes);
    });

    const request = httpMock.expectOne(service['url']);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCafes);
  });
});
