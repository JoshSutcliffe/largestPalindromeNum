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
    if (score === 99999) {
      console.log(i, num);
    }
  };
};

var checkNum1 = function (num) {
  for (var i = 100; i < num; i++) {
    checkNum2(i);
  };
  console.log(arr.sort());
};

checkNum1(999);
