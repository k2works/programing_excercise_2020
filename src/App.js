import { expect } from "chai";

export class App {
  constructor() {
    const select = () => {
      return `
        <select>
          <option>再帰</option>
          <option>ループ</option>
          <option>一般項</option>
        </select>
      `;
    };

    const table = () => {
      return `
        <table>
          <thead></thead>
          <thead></thead>
          <tbody bgcolor="darkgray">
            <tr>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>5</td>
              <td>8</td>
              <td>13</td>
              <td>21</td>
              <td>34</td>
            </tr>
            <tr>
              <td>55</td>
              <td>89</td>
              <td>144</td>
              <td>233</td>
              <td>377</td>
              <td>610</td>
              <td>987</td>
              <td>1597</td>
              <td>2584</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      `;
    };
    const contents = `
      <div>
      ${select()}
      ${table()}
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
