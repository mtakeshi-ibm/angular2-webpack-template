'use strict';

//i18n initialize
const i18n = require('i18n');

i18n.configure({
  // register language name into locales(indicates the JSON file name).
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
  // the directory of locale files
  directory: __dirname + '/../locales',
  // enables the JSON style.
  objectNotation: true
});

module.exports = i18n;
