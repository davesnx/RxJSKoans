// var Rx = require('rx')
// var Observable = Rx.Observable
//
// QUnit.module('Mapping')
//
// var __ = 'Fill in the blank'
//
// test('flatMap can be a cartesian product', function () {
//   var results = []
//   Observable.range(1, 3)
//     .map(function (x) {
//       return x + 1
//     })
//     .subscribe(results.push.bind(results))
//
//   equal('234', results.join(''))
// })
//
// test('flatMapLatest only gets us the latest value', function () {
//   var results = []
//   Observable.range(1, 3)
//     .flatMapLatest(function (x) {
//       return Observable.range(x, 3)
//     })
//     .subscribe(results.push.bind(results))
//
//   equal('12345', results.join(''))
// })
