const inputBox = document.querySelector('#inputbox');
const resetBtn = document.querySelector('#btn');
const getInp = document.querySelector('#get-input');

// keypress
inputBox.addEventListener("keydown", e => {
    getInp.innerText = inputBox.value;
})
resetBtn.addEventListener("click", e => {
    getInp.innerText = "You deleted!";
    inputBox.value = ""
})