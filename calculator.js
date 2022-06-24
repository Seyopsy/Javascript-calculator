var x, y, operation, result;
operation = prompt(
  "Welcome to Calculator \n What Operation would you like to perform,  +  -  /  *  "
);
x = prompt("Enter the First number/Numerator");
y = prompt("Enter the Second number/Denominator");
if (operation === "+") {
  result = Number(x) + Number(y);
} else if (operation === "-") {
  result = Number(x) - Number(y);
} else if (operation === "*") {
  result = Number(x) * Number(y);
} else {
  result = Number(x) / Number(y);
}
alert("Your answer is " + result + " ");
