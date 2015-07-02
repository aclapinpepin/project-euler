var solution = function(number) {
  var numberToFactor = number;
  var currentDivisor = 5;
  var largestDivisor = 0;

  while (numberToFactor != 1) {
    if (numberToFactor % currentDivisor === 0) {
      numberToFactor = numberToFactor / currentDivisor;
      largestDivisor = currentDivisor;
      currentDivisor = 2;
    } else {
      currentDivisor += 1;
    }
  }
  console.log(largestDivisor);
};

solution(600851475143);
