const utter = require("./sub/yo").shout;
utter();

let Emitter = require('events');
let ut = require('util');

let greetr1 = require('./greeter-obj-once');
greetr1.greet(' from greetr1');
greetr1.greeting = "Changed by greetr1!";
greetr1.greet(' from greetr1');

let greetr11 = require('./greeter-obj-once');
greetr11.greet(' from greetr11');
greetr11.greeting = "Changed by greetr11!";
greetr11.greet(' from greetr11');

let GreeterA = require('./greeter-cons');
let greetr2 = new GreeterA();
greetr2.greet(' from greetr2');
greetr2.greeting = "Changed by greetr2!";
greetr2.greet(' from greetr2');

let GreeterB = require('./greeter-cons');
ut.inherits(GreeterB,Emitter);
let greetr22 = new GreeterB();
greetr22.greet(' from greetr22');
greetr22.greeting = "Changed by greetr22!";
greetr22.greet(' from greetr22');
greetr22.on('Happening', ()=>console.log('Happened'));
greetr22.emit('Happening');