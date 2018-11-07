'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const products = mongoose.Schema(
  {
    name: {type:String, require:true, unique:true},
    description: {type: String},
    category: {type: String},
    price: {type:Number, require:true},
  }, 
  { toObject:{virtuals:true}, 
    toJSON:{virtuals:true},
  }
);

products.pre('validate', function() {
  console.log('products pre validate with this: ', this);
  if (this.price < 0) {
    throw('All prices must be at a positive number.');
  }
  // TODO test for a valid category???
});

products.pre('save', function() {
  console.log('products pre save with this: ', this);
  let rawName = this.name;
  let rawPrice = this.price;

  this.name = rawName.toUpperCase();
  
  if (rawPrice % 1 === 0) {
    let newPrice = (rawPrice + .99);
    this.price  = newPrice;
  }
});

products.post('save', function(next) {
  console.log('Products post save could be used to fire a message on a message queue letting consumers know that this has been saved.');
});

products.pre('update', function(next) {
  // TODO why does this not work on a patch?
  console.log('products pre update with this: ', this);
  let rawName = this.name;
  this.name = rawName.toUpperCase();
});

products.pre('findOneAndRemove', function(next) {
  console.log('products pre delete');
});

export default mongoose.model('products', products);

