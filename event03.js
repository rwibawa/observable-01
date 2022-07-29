const EventEmitter = require('events');

class MyEmitter extends EventEmitter { 
  
}

// Asynchronously
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log(a, b, this, this === myEmitter);
  });
});

myEmitter.emit('event', 'a', 'b');
myEmitter.emit('event', 'c', 'd');
