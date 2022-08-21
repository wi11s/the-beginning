
const log = document.getElementById('values');
const inputArray = []

function inspiration() {
    if (inputArray.length === 3) {
        const para = document.createElement("p");
        para.textContent = "Keep guessing!";
        document.querySelector("body").appendChild(para);
    }
}

function clickHint() {
    const para3 = document.createElement("p");
    para3.textContent = "Your last guess was actually quite good. Very good...";
    document.querySelector("body").appendChild(para3);
}

function hint() {
    if (inputArray.length === 6) {
        const para2 = document.createElement("p");
        para2.textContent = "Hint?";
        document.querySelector("body").appendChild(para2);
        
        para2.addEventListener("click", clickHint)
    }
}

function inputEnterResponder(event) {
    let input = document.querySelector('input').value;
    if (event.key === "Enter") {
        if (input.length > 0 && input.length <= 5) {
            log.textContent += `${input}, `;
            inputArray.push(input);
            document.querySelector('input').value = ""
                if (inputArray[inputArray.length - 1] === inputArray[inputArray.length - 2] && inputArray.length > 1) {
                    log.textContent = "You got it! "
                    window.open("./page1.html")
                }
        } else {
            alert('Guess must contain at least one and no greater than 5 elements');
        }
    inspiration();
    hint();
}}

function inputButtonResponder() {
    let input = document.querySelector('input').value;
    if (input.length > 0 && input.length <= 5) {
        log.textContent += `${input}, `;
        inputArray.push(input);
        document.querySelector('input').value = ""
        if (inputArray[inputArray.length - 1] === inputArray[inputArray.length - 2] && inputArray.length > 1) {
            log.textContent = "You got it!"
            window.open("./page1.html")
        }
    } else {
        alert('Guess must contain at least one and no greater than 5 elements');
    }
    inspiration();
    hint();
};


const textBox = document.querySelector('input');
textBox.addEventListener("keypress", inputEnterResponder);

const button = document.querySelector('button');
button.addEventListener("click", inputButtonResponder)