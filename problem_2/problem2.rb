def solution(limit)
  fib_seq        = [1, 2]
  sum_even_terms = 0

  loop do
    if fib_seq[-1] % 2 == 0 then sum_even_terms += fib_seq[-1] end
    
    new_term = fib_seq[-2] + fib_seq[-1]
    break if fib_seq[-1] > limit
    fib_seq << new_term
  end
  puts sum_even_terms
end

solution(4000000)