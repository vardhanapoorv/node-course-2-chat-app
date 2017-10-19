const moment = require('moment');

// var date = moment();
// date.add(1, 'years').subtract(10, 'months');
// console.log(date.format('Do, MMM YYYY'));
// new Date().getTime();
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
