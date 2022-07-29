const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occured!');
});

myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});

myEmitter.emit('event');
myEmitter.emit('error', new Error('whoops!'));