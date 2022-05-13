var buttons = document.querySelector('.buttons');
var display = document.querySelector('.display');
var mainDisplay = display.querySelector('.display-main');
var subDisplay = display.querySelector('.display-sub');

buttons.addEventListener('click', getButtonValues)

function getButtonValues(e) {
    let buttonValue = e.target.innerText;

    createDisplayEle(buttonValue)

    var inputValues = a(buttonValue)
    var firstOperator = true;

    if(isNumber(buttonValue)){
        // if(inputValues.firstButtonClicked) {
        //     inputValues.curVal = buttonValue;
        //     inputValues.allValues =+ buttonValue;
        //     inputValues.firstButtonClicked = false ;
        //     console.log(inputValues)    
        // } 
        if (inputValues.operator == '') {
            inputValues.curVal += buttonValue;
            inputValues.allValues += buttonValue;
            inputValues.firstButtonClicked = false;
            console.log(inputValues);
        }
        else if (inputValues.operator != '') {
            // inputValues.curVal = '';
            inputValues.curVal = buttonValue;
            inputValues.allValues += buttonValue;
            inputValues.operator = '';
            console.log(inputValues)
        }
        
    }
    else if (isOperator(buttonValue)) {
        if(inputValues.firstButtonClicked) {
            console.log(firstButton)
        }
        else if(buttonValue == '=') {}
        // else if(inputValues.operator !== buttonValue){
        else if(firstOperator){
            calculate(
                inputValues.curVal,
                0,
                inputValues.operator
                )
                inputValues.operator = checkOperator(buttonValue)
                inputValues.allValues += buttonValue;
                console.log(inputValues)       
        }
        else if(!firstOperator){
                calculate(
                    inputValues.curVal,
                    buttonValue,
                    inputValues.operator
                    )
                    inputValues.operator = checkOperator(buttonValue)
                    inputValues.allValues += buttonValue;
                    console.log(inputValues)
            }
    }        
}


function calculate(first,second,operator) {
    total = 0;
    first = Number(first);
    second = Number(second);
    console.log(first);
    console.log(second);
    if(operator == '+') total = first + second;
    else if(operator == '-') total = first - second;
    console.log(total)
}

function showCalculate(inputValues) {
    total = inputValues
}

function calculateValues() {
    var inputValues = {
        allValues: '',
        firstButtonClicked: true,
        curVal: '',
        operator: '',
        total: '',
    };
    return function fn(curVal) {
        return inputValues;
    }
}

let a = calculateValues()



function numberInput(val) {
    calculateValues()
}    



function addition() {

}

// check first input
    // if NaN? ignore : store
// after first input
    // if NaN?  : concat to first


function checkOperator(operator) {
    if(operator == '+') {
        return '+'
    }
    else if(operator == '-') {
        return '-';
    }
    else if(operator == '=') {
        return '';
    }
}    

    // return function x() {
    //     total = buttonValue
    // }
    // buttonValue = stringToNumber(buttonValue)
    // console.log(buttonValue)
// }



function createDisplayEle(value) {
    var displayEle = document.createElement("span");
    displayEle.innerHTML = value;
    subDisplay.appendChild(displayEle);
}

function subDisplayFn() {
    
}

function isNumber(value) {
    if(!isNaN(Number(value))) return true;
    else return false;
}

function isOperator(value) {
    return !isNumber(value)
}

console.log(buttons)