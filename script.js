const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(even.target.value)
    })
})

let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber ==='0') {
        currentNumber = number
    } else {
        currentNumber += number
    }  
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operator = document.querySelectorAll(".operator")

operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator ==='') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
       case "+":
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break
       case "-":
            result = parseInt(prevNumber) - parseInt(currentNumber)
            break
       case "*":
           result = parseInt(prevNumber) * parseInt(currentNumber)
           break
       case "/":
           result = parseInt(prevNumber) / parseInt(currentNumber)
           break
       default:
           return 
    }
}

currentNumber = result
calculationOperator = ''

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.include('.')) {
        return
    }
    currentNumber += dot
}
