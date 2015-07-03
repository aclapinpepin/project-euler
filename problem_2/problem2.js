var solution = function() {
  var LIMIT   = 4000000;
  var fibSeq = [1, 2];
  var sumEvenTerms = 0;

  // Populate the Fibonacci array
  while (fibSeq[fibSeq.length - 1] < LIMIT) {
    newTerm = fibSeq[fibSeq.length - 2] + fibSeq[fibSeq.length - 1];
    fibSeq.push(newTerm);
  }
  
  // Get the sum of all the even numbers in the sequence
  for (i = 0; i < fibSeq.length; i++) {
    if (fibSeq[i] % 2 === 0) {
      sumEvenTerms += fibSeq[i];
    }
  }

  console.log(sumEvenTerms);
};

solution();