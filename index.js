let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  const myVar = " " + count + " -";
  // saveEl.innerText += myVar;
  saveEl.textContent += myVar;
  count = 0;
  countEl.textContent = 0;
}
