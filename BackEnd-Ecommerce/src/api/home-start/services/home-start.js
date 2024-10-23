'use strict';

/**
 * home-start service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-start.home-start');
