let count = 0;
const display = document.getElementById("count");

document.getElementById("plus").addEventListener("click", () => {
  count++;
  display.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});
