const array = [1, 2, 3, 4];


function loop() {
  for (var i = 0; i < array.length; i++) {

    (function (i) {
      setTimeout(function () {
        console.log('I am at index ' + array[i])
      }, 3000)
    })(i)
  }
}

loop()