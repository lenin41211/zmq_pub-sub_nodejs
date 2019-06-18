'use strict';
const
  zmq = require('zeromq'),
  publisher = zmq.socket('pub');

// Send a beacon message to any subscribers.
setInterval(function() {
  let msg = {
    pid: process.pid,
    timestamp: Date.now()
  };
  console.log(msg);
  publisher.send(JSON.stringify(msg));
}, 1000);

// Listen on TCP port 5432.
publisher.bind('tcp://*:5563', function(err) {
  if(err)
    console.log(err)
  else
    console.log('Listening on 5563…')
})

