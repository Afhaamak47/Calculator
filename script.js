let displayNumber = (number) => {
  const display = document.getElementById("display");
  display.value += number;
};

let performOperation = (operator) => {
  const display = document.getElementById("display");
  const currentDisplay = display.value;
  const lastChar = currentDisplay.slice(-1);
  let operators = ["+", "-", "*", "/"];
  if (operators.includes(lastChar)) {
    display.value = currentDisplay.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
};

let clearDisplay = () => {
  document.getElementById("display").value = "";
};

let calculateResult = () => {
  const display = document.getElementById("display");
  const expression = display.value;
  try {
    const result = Function('"use strict";return (' + expression + ")")();
    display.value = Number.isFinite(result) ? result : "Error";
  } catch (error) {
    display.value = "Error";
  }
};
