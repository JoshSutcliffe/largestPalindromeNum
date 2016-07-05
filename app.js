console.log("connected");

var arr = [];

var checkNum2 =function(num) {
  for (var i = 100; i < num; i++) {
    var score = i * num;
    var string = score.toString();
    var reversed = string.split("").reverse().join("");
    debugger
    if (string === reversed) {
      arr.push(parseInt(reversed));
    };
  };
};

var checkNum1 = function (num) {
  for (var i = 100; i < num; i++) {
    checkNum2(i);
  };
  function getMaxOfArray(numArray) {
    console.log(Math.max.apply(null, numArray));
  };
  getMaxOfArray(arr);
};

checkNum1(999);
