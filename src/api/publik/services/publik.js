'use strict';

/**
 * publik service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::publik.publik');
