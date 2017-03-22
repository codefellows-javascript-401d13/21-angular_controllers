'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('Cowsay Controller', function(){
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });
  
  describe('initial properties', () => {
    it('title property should equal Cow Creator', () => {
      expect(this.cowsayCtrl.title).toBe('Cow Creator');
    });
  });
});