
const log = document.getElementById('values');
//let input = document.querySelector('input').value;

/*const textBox = document.querySelector('input');
textBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    let input = document.querySelector('input').value;
    log.textContent += `${input}, `
    alert(input);
  }
});
const button = document.querySelector('button');
button.addEventListener("click", function() {
    let input = document.querySelector('input').value;
    log.textContent += `${input}, `
    alert(input);
});*/

const textBox = document.querySelector('input');
textBox.addEventListener("keypress", function(event) {
    let input = document.querySelector('input').value;
    if (event.key === "Enter") {
        if (input.length > 0 && input.length<=5) {
            log.textContent += `${input}, `;
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
    } else {
        alert('Guess must contain at least one and no greater than 5 elements');
    }
});
