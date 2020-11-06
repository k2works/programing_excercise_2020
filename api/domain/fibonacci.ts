export interface Command {
  exec(number: number): any;
}

export class FibonacciList implements Command {
  private _command: Command;

  constructor(command: Command) {
    this._command = command;
  }
  exec(number: number): number[] {
    return [...Array(number)].map((_, i: number) => this._command.exec(i + 1));
  }
}

export class Fibonacci implements Command {
  private _algorithm: Command;

  constructor(algorithm: Command) {
    this._algorithm = algorithm;
  }
  exec(number: number): number {
    if (number > 100) throw "100以上は計算できません";

    return this._algorithm.exec(number);
  }
}

export enum FibonacciType {
  Recursive = 1,
  Loop = 2,
  GeneralTerm = 3,
}

export namespace FibonacciTypeEnum {
  export function valueOf(value: FibonacciType) {
    switch (value) {
      case FibonacciType.Recursive:
        return new FibonacciRecursive();
      case FibonacciType.Loop:
        return new FibonacciLoop();
      case FibonacciType.GeneralTerm:
        return new FibonacciGeneralTerm();
      default:
        throw "該当するアルゴリズムが存在しません";
    }
  }
}

export class FibonacciRecursive implements Command {
  exec(number: number, memo: number[] = []): number {
    if (memo[number]) return memo[number];
    if (number === 0) return 0;
    if (number === 1) return 1;

    memo[number] = this.exec(number - 1, memo) + this.exec(number - 2, memo);
    return memo[number];
  }
}

export class FibonacciLoop implements Command {
  exec(number: number): number {
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
}

export class FibonacciGeneralTerm implements Command {
  exec(number: number): number {
    let a: number = ((1 + Math.sqrt(5)) / 2) ** number;
    let b: number = ((1 - Math.sqrt(5)) / 2) ** number;
    const result: number = (a - b) / Math.sqrt(5);
    return Math.round(result);
  }
}
