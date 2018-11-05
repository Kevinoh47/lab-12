'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const products = mongoose.Schema(
  {
    name: {type:String, require:true},
    description: {type: String},
    category: {type: String},
    price: {type:Number, require:true},
  }, 
  { toObject:{virtuals:true}, 
    toJSON:{virtuals:true},
  }
);

products.pre('save', function() {
  console.log('products pre save with this: ', this);
});

products.pre('update', function() {
  console.log('products pre update with this: ', this);
});

products.pre('findOneAndRemove', function() {
  console.log('products pre delete');
});

export default mongoose.model('products', products);

