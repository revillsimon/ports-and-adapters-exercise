import { useCounter } from "./context";

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <main className="counter">
      <button
        type="button"
        id="decrement"
        className="counter__btn"
        disabled={count === 0}
        onClick={decrement}
      >
        Decrement
      </button>
      <p id="counter-display" className="counter__count">
        {count}
      </p>
      <button
        type="button"
        id="increment"
        className="counter__btn"
        onClick={increment}
      >
        Increment
      </button>
      <button
        type="button"
        id="reset"
        className="counter__btn counter__btn--reset"
        onClick={reset}
      >
        Reset
      </button>
    </main>
  );
}

export default App;
