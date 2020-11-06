export class Fibonacci {
  calc2(number: number): number {
    let a: number = 0;
    let b: number = 1;
    let c: number = 0;
    for (let i = 0; i < number; i++) {
      a = b;
      b = c;
      c = a + b;
    }
    return c;
  }
  calc(number: number, memo: number[] = []): number {
    if (memo[number]) return memo[number];
    if (number === 0) return 0;
    if (number === 1) return 1;

    memo[number] = this.calc(number - 1, memo) + this.calc(number - 2, memo);
    return memo[number];
  }
}
