'use strict'
// click a button

// if the button value is a number
    // if operator is = ''
        // concat the button value to LHS value
    // else
        // concat the button value to RHS value
        // run calculate function

// if the button value is an operator
    // if LHS is = '' 
        // do nothing
    // else change operator value to new value


// calculate function takes LHS, RHS and operator
    // check operator type to perform operation

var buttons = document.querySelectorAll('button');
var display = document.querySelector('.display');
var mainDisplay = display.querySelector('.display-main');
var subDisplay = display.querySelector('.display-sub');

buttons.forEach(button => {
    button.addEventListener('click', getButtonValues)
});


function getButtonValues(event) {
    var buttonValue = event.target.innerText;
    if(isNumber(buttonValue)) return number(buttonValue)
    else return operator(buttonValue)
}


function number(value) {
    // value = Number(value)
    var values = a()

    if (values.operator == '') {
        values.LHS += value;
    } else {
        values.RHS += value;
        calculate()
    }
    values.calcStr += value;
    mainDisplay.innerText = values.calcStr
    console.log(values)
}

function operator(value) {
    var values =  a();
    if(values.RHS != '') {
        values.RHS = '';
        values.operator = value;
        values.LHS = values.total;
    }
    else if(values.LHS != '') {
        values.operator = value;
    }
    var calcStr = values.calcStr;
    var lastStr = calcStr[calcStr.length -1]
    
    if(isNumber(lastStr)) {
        values.calcStr += value;
    } else if(isOperator(lastStr)) {
        if(lastStr != value) {
            values.calcStr = calcStr.replace(/.$/,value)
        }
        mainDisplay.innerText = values.calcStr
    }
    console.log(values)
}

function calculate() {
    var values = a()    
    var total = 0;
    var first = Number(values.LHS);
    var second = Number(values.RHS);

    if(values.operator == '+') total = first + second;
    else if(values.operator == '-') total = first - second;
    values.total = total;
    console.log(total)
}


function valueStore() {
    var inputValues = {
        calcStr: '',
        LHS: '',
        RHS: '',
        operator: '',
        total: '',
    };
    return function fn() {
        return inputValues;
    }
}

let a = valueStore()



function isNumber(value) {
    if(!isNaN(Number(value))) return true;
    else return false;
}

function isOperator(value) {
    return !isNumber(value)
}
