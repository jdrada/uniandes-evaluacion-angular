import { Cafe } from './cafe';
import { faker } from '@faker-js/faker';

describe('Cafe', () => {
  it('should create an instance', () => {
    expect(
      new Cafe(
        faker.number.int(),
        faker.commerce.product(),
        faker.commerce.productAdjective(),
        faker.location.direction(),
        faker.commerce.productMaterial(),
        faker.number.int(),
        faker.internet.url()
      )
    ).toBeTruthy();
  });
});
