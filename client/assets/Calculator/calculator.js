const delBtn = document.querySelector('#del');
const calcInput = document.querySelector('#calc-input');
const calcAnswer = document.querySelector('#calc-answer');
/* number keypress */
const numb0 = document.querySelector('#numb0')
const numb1 = document.querySelector('#numb1')
const numb2 = document.querySelector('#numb2')
const numb3 = document.querySelector('#numb3')
const numb4 = document.querySelector('#numb4')
const numb5 = document.querySelector('#numb5')
const numb6 = document.querySelector('#numb6')
const numb7 = document.querySelector('#numb7')
const numb8 = document.querySelector('#numb8')
const numb9 = document.querySelector('#numb9')
/* keypress for signs */
const plus = document.querySelector('#plus')
const multiply = document.querySelector('#multiply')
const dot = document.querySelector('#dot')
const divide = document.querySelector('#divide')
const minus = document.querySelector('#minus')
const equal = document.querySelector('#equal')

delBtn.addEventListener('click', function () {
    // for click effect
    delBtn.style.padding = 19.5 + 'px';
    let retrieveText = calcInput.textContent;
    let textToArray = retrieveText.split(' ');
    textToArray.splice(-1, 1); /* start from the end and remove first element */
    textToString = textToArray.join(' ');
    retrieveText = textToString; /* reset our retrieve text and append to its parent element*/
    calcInput.textContent = retrieveText;
    if (calcInput.textContent === '') {
        calcInput.textContent = '0';
        let retrieveCalcAns = calcAnswer.textContent;
        const answerLenght = retrieveCalcAns.length; /* this is meant to stop deletion of answer after a delete */
        textToArray = retrieveCalcAns.split('');
        textToArray.splice(-1, 1);
        textToString = textToArray.join('');
        retrieveCalcAns = textToString;
        calcAnswer.textContent = retrieveCalcAns
        if (answerLenght > retrieveCalcAns.length) {
            calcAnswer.textContent = '0';
        }
    }
})
numb1.addEventListener('click', function () {
    const key = ' 1';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
numb2.addEventListener('click', function () {
    const key = ' 2';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
numb3.addEventListener('click', function () {
    const key = ' 3';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
numb4.addEventListener('click', function () {
    const key = ' 4';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
numb5.addEventListener('click', function () {
    const key = ' 5';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
numb6.addEventListener('click', function () {
    const key = ' 6';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
numb7.addEventListener('click', function () {
    const key = ' 7';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
numb8.addEventListener('click', function () {
    const key = ' 8';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
numb9.addEventListener('click', function () {
    const key = ' 9';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
numb0.addEventListener('click', function () {
    const key = ' 0';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
plus.addEventListener('click', function () {
    const key = ' +';
    let retrieveText = calcInput.textContent;
    if (calcInput.textContent === '0') {
        retrieveText = ''
    }
    retrieveText += key;
    calcInput.textContent = retrieveText
})
minus.addEventListener('click', function () {
    const key = ' -';
    let retrieveText = calcInput.textContent;
    retrieveText += key;
    calcInput.textContent = retrieveText
})
divide.addEventListener('click', function () {
    const key = ' /';
    let retrieveText = calcInput.textContent;
    retrieveText += key;
    calcInput.textContent = retrieveText
})
multiply.addEventListener('click', function () {
    const key = ' *';
    let retrieveText = calcInput.textContent;
    retrieveText += key;
    calcInput.textContent = retrieveText
})
equal.addEventListener('click', function () {
    delBtn.style.padding = 19.5 + 'px';
    let retrieveText = calcInput.textContent;
    let textToArray = retrieveText.split(' ');
    retrieveText
})
