import React from "react";
import { Nav, Button, Footer } from "../components";
import useCounter from "../hooks/useCounter";

function Counter() {
  const { state, increment, decrement, reset, setValue } = useCounter();

  return (
    <>
      <Nav />
      <section>
        <h1 className="title">Let's Start Counting!</h1>
        <div className="info">
          <p>
            N/B: Max count is 100. [Do not multiply a number that is more than
            100. Do not increment a number that is more than 100!]
          </p>
        </div>
        <div className="count">Count: {state.count}</div>
        <div className="card">
          <Button backgroundColor="steelblue" color="white" onClick={setValue}>
            Multiply by 3
          </Button>
          <Button backgroundColor="green" color="white" onClick={increment}>
            +
          </Button>
          <Button backgroundColor="green" color="white" onClick={decrement}>
            -
          </Button>
          <Button backgroundColor="red" color="white" onClick={reset}>
            Reset
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Counter;
