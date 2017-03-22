'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const swaggycowApp = angular.module('swaggycowApp', []);

swaggycowApp.controller('SwaggycowController', ['$log', SwaggycowController]);

function SwaggycowController($log) {
  $log.debug('SwaggycowController');

  this.title = 'swag animal creator.';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = cowfiles[0];
  });

  this.update = function(input) {
    $log.debug('SwaggycowCtrl.update()');

    return cowsay.say({
      text: input || 'AYOOOOOOO',
      f: this.current,
    });
  };

  this.speak = function(input) {
    $log.debug('SwaggycowCtrl.speak()');

    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = function() {
    $log.debug('SwaggycowCtrl.undo()');

    this.history.pop();
    this.spoken = this.history.pop() || '';
  };
}

swaggycowApp.controller('NavController', ['$log', NavController]);

function NavController($log) {
  $log.debug('NavController');

  this.routes = [
    { name: 'home', url: '/home'},
    { name: 'about', url: '/about'},
    { name: 'contact', url: '/contact'},
  ];
}
