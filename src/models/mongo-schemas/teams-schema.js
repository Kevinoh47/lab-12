'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const teams = mongoose.Schema({
  name: {type:String, require:true},
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

export default mongoose.model('teams', teams);

