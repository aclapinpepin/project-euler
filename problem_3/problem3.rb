def solution(number)
  number_to_factor = number
  current_divisor  = 5;
  largest_divisor  = 0

  while number_to_factor != 1
    if number_to_factor % current_divisor == 0
      number_to_factor /= current_divisor
      largest_divisor = current_divisor
      current_divisor = 2
    else
      current_divisor += 1
    end
  end
  puts largest_divisor
end

solution(600851475143)