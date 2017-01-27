// https://developers.google.com/web/fundamentals/getting-started/primers/promises
function returnPromise(i) {
  return new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
  if (i==0) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
}

returnPromise(0).then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});


function returnPromise2(i) {
  return new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
  if (i==0) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
}

returnPromise2(1).then(function(result) {
  console.log(result); // "Stuff worked!"
}).catch(function(err) {
   console.log('catch', err);
})


var p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, "one"); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, "two"); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
  reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(values => { 
  console.log(values);
}, reason => {
  console.log(reason)
});

//From console:
//"reject"

//It's even possible to use .catch
Promise.all([p1, p2, p3, p4]).then(values => { 
  console.log(values);
}).catch(reason => { 
  console.log(reason)
});

//From console: 
//"reject"
