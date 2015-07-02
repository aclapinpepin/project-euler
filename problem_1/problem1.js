var solution = function(limit) {
  sum = 0;
  for (i = 1; i < limit; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum += i;
    }
  }

  console.log(sum);
};

solution(1000);