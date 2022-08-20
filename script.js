const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);
function updateValue(e) {
    log.textContent = e.target.value;
}
updateValue()

