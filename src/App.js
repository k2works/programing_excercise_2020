import { expect } from "chai";

export class App {
  constructor() {
    this._command = new FibonacciList(new Fibonacci(new FibonacciRecursive()));
    const list = this._command.exec(100);

    const select = () => {
      return `
        <select>
          <option>再帰</option>
          <option>ループ</option>
          <option>一般項</option>
        </select>
      `;
    };

    const table = (list) => {
      const header = [...Array(10).keys()]
        .map((i) => `<td>${i + 1}</td>`)
        .join("");
      const body = [...Array(10).keys()]
        .map((i) => (i === 0 ? 0 : i * 10))
        .map((j) =>
          [...Array(10).keys()].map((k) => `<td>${list[k + j]}`).join("")
        );
      return `
        <table>
          <thead bgcolor="darkgray">
           <tr>
            ${header}
           </tr>
          </thead>
          <thead></thead>
          <tbody bgcolor="ivory">
            <tr>${body[0]}</t>
            <tr>${body[1]}</t>
            <tr>${body[2]}</t>
            <tr>${body[3]}</t>
            <tr>${body[4]}</t>
            <tr>${body[5]}</t>
            <tr>${body[6]}</t>
            <tr>${body[7]}</t>
            <tr>${body[8]}</t>
            <tr>${body[9]}</t>
          </tbody>
        </table>
      `;
    };

    const contents = `
      <div>
      ${select()}
      ${table(list)}
      </div>
    `;
    document.getElementById("app").innerHTML = contents;
  }
}

export class FibonacciList {
  constructor(command) {
    this._command = command;
  }

  exec(count) {
    return [...Array(count + 1).keys()].map((i) => this._command.exec(i));
  }
}

export class Fibonacci {
  constructor(algorithm) {
    this._algorithm = algorithm;
  }

  exec(number) {
    return this._algorithm.exec(number);
  }
}

export class FibonacciRecursive {
  exec(number, memo = []) {
    if (memo[number]) return memo[number];
    if (number === 0) return 0;
    if (number === 1) return 1;

    memo[number] = this.exec(number - 1, memo) + this.exec(number - 2, memo);
    return memo[number];
  }
}

export class FibonacciLoop {
  exec(number) {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 0; i < number; i++) {
      a = b;
      b = c;
      c = a + b;
    }
    return c;
  }
}

export class FibonacciGeneralTerm {
  exec(number) {
    let a = ((1 + Math.sqrt(5)) / 2) ** number;
    let b = ((1 - Math.sqrt(5)) / 2) ** number;
    const result = (a - b) / Math.sqrt(5);
    return Math.round(result);
  }
}
