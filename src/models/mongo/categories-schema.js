'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema({
  name: {type:String, require:true},
  description: {type: String},
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

export default mongoose.model('categories', categories);

