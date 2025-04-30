let currInput = ''
let currOperation = ''
let prevInput = '';

function appendNumber(number){
    currInput = currInput + number
    document.getElementById('display').value = `${prevInput} ${currOperation} ${currInput}`
}
function appendOperation(operation){
    if(currInput === '') return;   // 8 + ,then user cant press another operator
    if(prevInput !== ''){
        calculate();               // 8 + 8, if again user press + then calculate function will be called.
    }
    currOperation = operation;
    prevInput = currInput;
    currInput = '';
    document.getElementById('display').value = `${prevInput} ${currOperation}`
}
function calculate(){
    if(prevInput === '' || currInput === '') return 
    let result
    let prev = parseFloat(prevInput)
    let curr = parseFloat(currInput)

    switch (currOperation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if(curr === 0){
                alert("Error!")
            }
            result = prev / curr;
            break;
        default:
            return;
    }
    currInput = result.toString();
    currOperation = '';
    prevInput = '';
    document.getElementById('display').value = currInput;
}

function clearDisplay(){
    currInput = ''
    currOperation = ''
    prevInput = '';
    document.getElementById('display').value=''
}