const request = require('request');
const fs = require('fs');
const assert = require('assert');

function flow() {
  var args = Array.prototype.slice.call(arguments);
  return {
    start: function step(param) {
        var fn = args.shift();
        fn(param, step);
    }
  };
}

flow(
  function getPageHTML(url, next) {
    request.get(url, function(err, resp, body) {
      next(body);
    }.bind(this));
  },
  function waitSomeTime(body, next) {
    setTimeout(function() {
    console.log(body)
      next(body.length);
    }, 2000);
  },
  function writeFile(len, next) {
    const fileName = './foo.out';
    fs.writeFile(fileName, len, function(err) {
      next(fileName);
    });
  },
  function readFile(fileName, next) {
    fs.readFile(fileName, 'utf8', function(err, body) {
      next(body)
    });
  },
  function doneAndAssert(result) {
    console.log(`Result is ${result} bytes`);
    assert(parseInt(result, 10)>40000);
  }
).start('https://www.google.com')
