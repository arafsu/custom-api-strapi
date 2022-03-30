'use strict';

/**
 * satelit service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::satelit.satelit');
