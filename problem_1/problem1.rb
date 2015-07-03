def solution(limit)
  sum = 0
  (1...limit).each { |n| sum += n if (n % 3 == 0 || n % 5 == 0) }
  puts sum
end

solution(1000)