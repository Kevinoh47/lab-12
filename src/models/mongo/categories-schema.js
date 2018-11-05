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

categories.pre('save', function() {
  console.log('categories pre save with this: ', this);
});

categories.pre('update', function() {
  console.log('categories pre update with this: ', this);
});

categories.pre('findOneAndRemove', function() {
  console.log('categories pre delete');
});

export default mongoose.model('categories', categories);

