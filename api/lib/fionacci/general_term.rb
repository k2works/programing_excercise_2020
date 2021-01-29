module Fibonacci
  class GeneralTerm
    def exec(number)
      a = ((1 + Math.sqrt(5)) / 2)**number
      b = ((1 - Math.sqrt(5)) / 2)**number
      ((a - b) / Math.sqrt(5)).round
    end
  end
end