const faker = require('faker');

const obj = {
  name: faker.name.lastName(),
  image: faker.internet.avatar(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  country: faker.address.country(),
  postalCode: faker.address.zipCode()
}

console.log(obj);