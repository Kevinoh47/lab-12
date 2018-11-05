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

products.pre('validate', function() {
  console.log('products pre validate function for this: ', this);
});

products.pre('save', function() {
  console.log('products pre save with this: ', this);
});

products.post('save', function() {
  console.log('Products post save could be used to fire a message on a message queue letting consumers know that this has been saved.');
});

products.pre('update', function() {
  console.log('products pre update with this: ', this);
});

products.pre('findOneAndRemove', function() {
  console.log('products pre delete');
});

export default mongoose.model('products', products);

