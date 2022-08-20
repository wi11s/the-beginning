
const log = document.getElementById('values');
//let input = document.querySelector('input').value;

/*function showMeWhatISaid() { 
    log.textContent = input;
    alert(input);
}*/

const textBox = document.querySelector('input');
textBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    let input = document.querySelector('input').value;
    log.textContent += `${input}, `
    alert(input);
  }
});