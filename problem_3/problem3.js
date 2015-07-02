var solution = function(number) {
  var dividers     = [];
  var primeNumbers = [];

  // Get all natural numbers that divide number without remainings
  for (i = 2; i <= number; i++) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }

  // Get all prime numbers of the dividers
  // Consider every number is a prime number until verification
  for (i = 0; i < dividers.length; i++) {
    var isPrimeNumber = true;
    for (j = 2; j < dividers[i]; j++) {
      if ((dividers[i] % j === 0)) {
        isPrimeNumber = false;
      }
    }
    if (isPrimeNumber) {
      primeNumbers.push(dividers[i]);
    }
  }

  console.log(dividers);
  console.log(primeNumbers);
};

solution(13195);