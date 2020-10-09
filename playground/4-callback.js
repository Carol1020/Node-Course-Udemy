const doWorkCallback = (callback) => {
  setTimeout(() => {
    // First element is error, second is result
    // callback("This is my error!", undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
