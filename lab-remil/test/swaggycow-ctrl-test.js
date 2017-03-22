'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('Swaggycow Controller', function() {
  beforeEach( () => {
    angular.mock.module('swaggycowApp');
    angular.mock.inject( $controller => {
      this.swaggycowCtrl = new $controller('SwaggycowController');
    });
  });

  describe('intial properties', () => {
    it('title property should equal "swag animal creator."', () => {
      expect(this.swaggycowCtrl.title).toBe('swag animal creator.');
    });

    it('history property should an empty array', () => {
      expect(Array.isArray(this.swaggycowCtrl.history)).toBe(true);
    });

    it('list of cowfiles should show right files', () => {
      cowsay.list((err, list) => {
        expect(this.swaggycowCtrl.cowfiles).toEqual(list);
        expect(this.swaggycowCtrl.current).toEqual(list[0]);
      });
    });
  });

  describe('#update', () => {
    it('should return an output that says testswag', () => {
      let expected = cowsay.say({ text: 'testswag', f: this.swaggycowCtrl.current });
      let result = this.swaggycowCtrl.update('testswag');
      expect(result).toEqual(expected);
    });
  });

  describe('#speak', () => {
    it('should return an output that says testswag');
  });
});
