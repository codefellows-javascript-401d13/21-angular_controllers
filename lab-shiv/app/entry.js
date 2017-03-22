'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', [$log, CowsayController]);

function CowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'moo moo motherfucker';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });

  this.update = function(input) {
    $log.debug('CowsayController.update()');
    return cowsay.say({ text: 'meow' || this.spoken, f:current })
  };

  this.spoken = function(input) {
    $log.debug('CowsayController.spoken()');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = function() {
    $log.debug('CowsayController.undo()');
    this.history.pop();
    this.spoken = this.history.pop() || '';
  };

  cowsayApp.controller('NavController', [$log, NavController]);

  function NavController($log) {
    log.debug('NavController');

    this.routes = [
      {
        name: 'home',
        url: '/home'
      },
      {
        name: 'about',
        url: './about-us'
      },
      {
        name: 'contact',
        url: './contact-us'
      }
    ]
  }
