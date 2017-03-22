'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');

require('./scss/reset.scss');
require('./scss/main.scss');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'cow creator';
  this.subtitle = 'make it, view it, and undo it!';
  this.history = [];

  this.cowUpdate = function(input) {
    $log.debug('cowUpdate');
    return cowsay.say({text: input || 'It\'s like a cow\'s opinion. It\'s moo.', f: this.current});
  };

  this.theCowSays = function(input) {
    $log.debug('theCowSays:', input);
    this.spoken = this.cowUpdate(input);
    this.history.push(this.spoken);
    $log.debug(this.history);
  };

  this.undo = function() {
    $log.debug('undo');
    this.history.pop();
    this.spoken = this.history.pop() || '';
  };

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });

}

cowsayApp.controller('CowsayNav', ['$log', CowsayNav]);

function CowsayNav() {
  this.routes = [
    {
      name: 'home',
      url: '/home'
    },
    {
      name: 'cow creator',
      url: '/cowcreator'
    },
    {
      name: 'account',
      url: '/account'
    }
  ];
}