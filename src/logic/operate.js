import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  let one = Big(numberOne || "0");
  let two = Big(numberTwo || "0");
  if (operation === "÷" && (numberOne === 0 || numberOne === null)) {
    one = Big(1);
  }
  if (operation === "÷" && (numberTwo === 0 || numberTwo === null)) {
    two = Big(1);
  }
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    return one.div(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
