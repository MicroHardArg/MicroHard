'use strict';

/**
 * cliente-recurrente service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cliente-recurrente.cliente-recurrente');
