'use strict';

import Model from './models.js';
import schema from './mongo-schemas/teams-schema.js';

class Teams extends Model {}

const teams = new Teams(schema);

export default teams;