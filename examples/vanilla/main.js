import {
  LocalStorageCounterRepository,
  CounterUseCase,
} from "../../dist/index.js";

const repository = new LocalStorageCounterRepository();
const counterUseCase = new CounterUseCase(repository);

const counterDisplay = document.getElementById("counter-display");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function renderCount() {
  const count = counterUseCase.getCount();

  decrementButton.disabled = count === 0;
  counterDisplay.textContent = count;
}

function increment() {
  counterUseCase.increment();
  renderCount();
}

function decrement() {
  counterUseCase.decrement();
  renderCount();
}

function reset() {
  counterUseCase.reset();
  renderCount();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);

renderCount();
