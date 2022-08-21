
const log = document.getElementById('values');
const inputArray = []

const textBox = document.querySelector('input');
textBox.addEventListener("keypress", function(event) {
    let input = document.querySelector('input').value;
    if (event.key === "Enter") {
        if (input.length > 0 && input.length<=5) {
            log.textContent += `${input}, `;
            inputArray.push(input);
                if (inputArray[inputArray.length-1]===inputArray[inputArray.length-2] && inputArray.length>1) {
                    log.textContent = "u got it"
                    window.open("./page1.html")
                }
        } else {
            alert('Guess must contain at least one and no greater than 5 elements');
        }
    }   
});

const button = document.querySelector('button');
button.addEventListener("click", function() {
    let input = document.querySelector('input').value;
    if (input.length > 0 && input.length<=5) {
        log.textContent += `${input}, `;
        inputArray.push(input);
        if (inputArray[inputArray.length-1]===inputArray[inputArray.length-2] && inputArray.length>1) {
            log.textContent = "u got it"
            window.open("./page1.html")
        }
    } else {
        alert('Guess must contain at least one and no greater than 5 elements');
    }
});
