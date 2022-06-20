const input = require('input');
const { sum, subtraction, multiplication, division } = require('./calculator-methods');

const calc = async () => {
  const num1 = +await input.text('num1:');
  const oparation = await input.text('oparation:');
  const num2 = +await input.text('num2:');

  switch (oparation) {
    case '+':
      console.log(sum(num1, num2));
      break;
    case '-':
      console.log(subtraction(num1, num2));
      break;
    case '*':
      console.log(multiplication(num1, num2));
      break;
    case '/':
      console.log(division(num1, num2));
      break;

    default:
      break;
  }

  process.emit(calc())
}

calc()
