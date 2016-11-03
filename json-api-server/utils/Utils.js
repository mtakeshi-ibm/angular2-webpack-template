'use strict';
/* eslint-disable no-console */
//const archiver = require('archiver');
//const fs = require('fs');
const cfenv = require('cfenv');
//const logger = require('../modules/logger');

const Utils = {};
const appEnv = cfenv.getAppEnv();

/**
 * delete both _id and _rev property from obj in order to insert to Cloudant database
 * @param {Object} obj target
 *
 */
Utils.deleteIdAndRev = (obj) => {
  if (obj) {
    if (obj.hasOwnProperty('_id')){
      delete obj._id;
    }
    if (obj.hasOwnProperty('_rev')){
      delete obj._rev;
    }
  }

  return obj;
}

module.exports = Utils;
