"use strict";
const
  zmq = require('zeromq'),
  subscriber = zmq.socket('sub');

subscriber.connect('tcp://localhost:5563')
subscriber.subscribe('')


// Handle messages from publisher.
subscriber.on('message', function(data) {
	//console.log(data);
  let msg = JSON.parse(data);
  console.log(msg.pid + ': ' + new Date(msg.timestamp));
});

// subscriber.on('message', function() {
//   var msg = [];
//     Array.prototype.slice.call(arguments).forEach(function(arg) {
//         msg.push(arg.toString());
//     });

//     console.log(msg);

// })
