const faker = require('faker');
const { Product } = require('./models/product.model')
require('./helpers/connectDatabase');


const obj = {
  name: faker.commerce.productName(),
  image: faker.image.fashion(),
  img1: faker.image.image(),
  img2: faker.image.nature(),
  img3: faker.image.food(),
  img4: faker.image.animals(),
  img5: faker.image.image(),
  price: faker.commerce.price(),
  description1: faker.lorem.paragraph(),
  description2: faker.lorem.paragraphs(),
}

function create() {
  for (let index = 0; index < 10; index++) {
    const title = faker.commerce.productName();
    const image = 'https://source.unsplash.com/collection/1163637/480x480';
    const price = faker.commerce.price();
    const description = faker.lorem.paragraph();
    const owner = '5b48ae9b16159905e20658a9';
    const category = '5b48b32fccc76f06ec98d2b8';
    const product = new Product({ title, image, price, description, owner, category });
    product.save()
    .then(() => console.log('success'))
    .catch(err => console.log(err.message));
  }

  for (let index = 0; index < 10; index++) {
    const title = faker.commerce.productName();
    const image = 'https://source.unsplash.com/collection/1163637/480x480';
    const price = faker.commerce.price();
    const description = faker.lorem.paragraph();
    const owner = '5b495592edb4b402ae451cea';
    const category = '5b48b36accc76f06ec98d2b9';
    const product = new Product({ title, image, price, description, owner, category });
    product.save()
    .then(() => console.log('success'))
    .catch(err => console.log(err.message));
  }

  for (let index = 0; index < 10; index++) {
    const title = faker.commerce.productName();
    const image = 'https://source.unsplash.com/collection/1163637/480x480';
    const price = faker.commerce.price();
    const description = faker.lorem.paragraph();
    const owner = '5b4955b6edb4b402ae451ceb';
    const category = '5b48ce9005a80b0a137b0335';
    const product = new Product({ title, image, price, description, owner, category });
    product.save()
    .then(() => console.log('success'))
    .catch(err => console.log(err.message));
  }
}
create();
// console.log(obj);