console.log("App.js: loaded");
export class App {
  constructor() {
    document.getElementById("app").innerHTML = Fibonacci.greeting();
  }
}

export class Fibonacci {
  static fib(n) {
    if (n === 0) return 0;

    return 1;
  }
}
