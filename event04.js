const EventEmitter = require('events');

class MyEmitter extends EventEmitter { 
  
}

// Handling events only once
const myEmitter = new MyEmitter();

let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});

myEmitter.emit('event');
myEmitter.emit('event');
