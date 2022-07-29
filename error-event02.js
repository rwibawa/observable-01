const { EventEmitter, errorMonitor } = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on(errorMonitor, (err) => {
  console.error(err);
});

myEmitter.emit('error', new Error('whoops!'));