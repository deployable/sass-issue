const request = require('supertest')
const app = require('../app')
const expect = require('chai').expect


describe('site', function(){

  it('responds to /', function(){
    return request(app).get('/')
    .then(res => {
      expect( res.text ).to.match( /^<!DOCTYPE html><html lang="en">/ )
    })
  })

})
