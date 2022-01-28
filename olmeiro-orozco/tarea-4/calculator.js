export class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  minus(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
  percent(num1, num2) {
    let remainder = num1 % num2;
    // console.log("remainder:", remainder);
    return remainder.toString();
  }
}
