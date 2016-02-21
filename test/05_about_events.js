// var Rx = require('rx')
// var Observable = Rx.Observable
// var EventEmitter = require('events').EventEmitter
//
// QUnit.module('Events')
//
// var __ = 'Fill in the blank'
//
// test('the main event', function () {
//   var received = []
//   var e = new EventEmitter()
//   var subscription = Observable.fromEvent(e, 'change')
//     .subscribe(received.push.bind(received))
//
//   e.emit('change', 'R')
//   e.emit('change', 'x')
//   e.emit('change', 'J')
//   e.emit('change', 'S')
//
//   subscription.dispose()
//
//   e.emit('change', '!')
//
//   equal('RxJS', received.join(''))
// })
