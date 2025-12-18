// const wrapper = document.querySelector(".wrapper");
// const h2 = document.createElement("h2");
// h2.textContent = "SALAM PTP-101";
// const p = document.createElement("p");
// p.textContent = "Yeni Iliniz Mubarek 2026";
// const button = document.createElement("button");
// button.textContent = "2026";
// wrapper.append(h2);
// wrapper.append(p);
// wrapper.append(button);


// const display = document.getElementById("display");
// const buttons = document.querySelectorAll(".btn");
// let current = "";
// let operator = "";
// let previous = "";

// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const value = btn.textContent;

//     if (!isNaN(value) || value === ".") {
//       current += value;
//       display.textContent = current;
//     }

//     if (["+", "−", "×", "÷"].includes(value)) {
//       operator = value;
//       previous = current;
//       current = "";
//     }

//     if (value === "=") {
//       let result;
//       const prev = parseFloat(previous);
//       const curr = parseFloat(current);

//       if (operator === "+") result = prev + curr;
//       if (operator === "−") result = prev - curr;
//       if (operator === "×") result = prev * curr;
//       if (operator === "÷") result = prev / curr;

//       display.textContent = result;
//       current = result.toString();
//     }

//     if (value === "AC") {
//       current = "";
//       previous = "";
//       operator = "";
//       display.textContent = "0";
//     }
//   });
// });

// const wrapper = document.querySelector(".wrapper");
// const button = document.createElement("button");
// button.textContent = "reng deyis";
// wrapper.append(button);

// let interval = null;
// let timeout = null;
// let isRunning = false;

// button.addEventListener("click", () => {
//     if (!isRunning) {
//         // START
//         isRunning = true;
//         button.textContent = "STOP";

//         interval = setInterval(() => {
//             const randomColor =
//                 "#" + Math.floor(Math.random() * 16777215).toString(16);
//             document.body.style.backgroundColor = randomColor;
//         }, 100);

//         timeout = setTimeout(() => {
//             stopColors();
//         }, 300000);

//     } else {
//         // STOP
//         stopColors();
//     }
// });

// function stopColors() {
//     clearInterval(interval);
//     clearTimeout(timeout);
//     isRunning = false;
//     button.textContent = "rengi deyis";

//     document.body.style.backgroundColor = "white";
// }
    // const wrapper = document.getElementById("wrapper");
    // const pTag = document.getElementById("ptag");
    // const removeBtn = document.getElementById("removeBtn");

    // // Butona tıklayınca p'yi sil
    // removeBtn.addEventListener("click", () => {
    //   if (pTag) {
    //     pTag.remove();
    //   }
    // });
