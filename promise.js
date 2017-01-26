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

