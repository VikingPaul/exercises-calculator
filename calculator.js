document.getElementById('add').addEventListener("click", add)
document.getElementById('subtract').addEventListener("click", subtract)
document.getElementById('multiply').addEventListener("click", multiply)
document.getElementById('divide').addEventListener("click", divide)
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply() {
  answer = maths(document.getElementById('firstNum').value, document.getElementById('secondNum').value, '*')
  document.getElementById('placement').innerHTML = answer
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add() {
  answer = maths(document.getElementById('firstNum').value, document.getElementById('secondNum').value, '+')
  document.getElementById('placement').innerHTML = answer
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract() {
  answer = maths(document.getElementById('firstNum').value, document.getElementById('secondNum').value, '-')
  document.getElementById('placement').innerHTML = answer
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide() {
  answer = maths(document.getElementById('firstNum').value, document.getElementById('secondNum').value, '/')
  document.getElementById('placement').innerHTML = answer
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
 function maths(one, two, func) {
  var answer
  one = parseInt(one)
  two = parseInt(two)
  if (func === "+") {
    answer = one + two
  } else if (func === "-") {
    answer = one - two
  } else if (func === "/") {
    answer = one / two
  } else if (func === "*") {
    answer = one * two
  } 
  return answer
 }