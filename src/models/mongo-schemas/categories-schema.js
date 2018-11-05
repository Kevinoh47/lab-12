'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema(
  {
    name: {type:String, require:true},
    description: {type: String},
  }, 
  { 
    toObject:{virtuals:true}, 
    toJSON:{virtuals:true},
  }
);

categories.virtual('products', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

categories.pre('find', function() {
  try {
    this.populate('products');
  }
  catch (e) {
    console.error(e);
  }
});

// categories.pre('validate', function() {
//   console.log('categories pre validate function for this: ', this);
// });

// categories.pre('save', function() {
//   console.log('categories pre save with this: ', this);
// });

// categories.post('save', function() {
//   console.log('Categories post save could be used to fire a message on a message queue letting consumers know that this has been saved.');
// });

// categories.pre('update', function() {
//   console.log('categories pre update with this: ', this);
// });

// categories.pre('findOneAndRemove', function() {
//   console.log('categories pre delete');
// });

export default mongoose.model('categories', categories);

