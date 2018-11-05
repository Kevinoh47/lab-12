'use strict';

import Model from './models.js';
import schema from './mongo-schemas/products-schema.js';

class Products extends Model {

  // for example...
  find(query) {
    console.log('Override Model.find method here if necessary, but make sure to return a promise.');
    // return Promise.resolve({text:'hello!'})
    return super.find(query);
  }
}

const products = new Products(schema);

export default products; 