global.chai = require('chai')
global.expect = require('chai').expect

const Promise = require('bluebird')
Promise.config({longStackTraces: true, warnings: true})

if (!process.env.NODE_ENV)
  process.env.NODE_ENV = 'test'


