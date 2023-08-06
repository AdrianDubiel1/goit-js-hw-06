const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const spanValue = document.querySelector("#value");

let counterValue = 0;

function updateCounterView() {
  spanValue.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
  updateCounterView((counterValue -= 1));
});

incrementButton.addEventListener("click", () => {
  updateCounterView((counterValue += 1));
});
