const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.artir');
const numberSpan = document.querySelector('.reqem');
const inputField = document.querySelector('input');
const tiklaBtn = document.querySelector('.tikla');
let number = 0;
plusBtn.addEventListener("click", () => {
    number ++;
    numberSpan.textContent = number;
});
minusBtn.addEventListener("click", () => {
    number --;
    numberSpan.textContent = number;
});
tiklaBtn.addEventListener("click", () => {
    let step = Number(inputField.value);
    number += step;
    numberSpan.textContent = number;
});
