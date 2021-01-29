module Fibonacci
  class Recursive
   def exec(number, memo = [])
      return 0 if number.zero?
      return 1 if number == 1

      memo[number] ||= exec(number - 1, memo) + exec(number - 2, memo)
   end
  end
end