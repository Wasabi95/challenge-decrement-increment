// Challenge: Write a React component that displays a counter with increment and decrement buttons. The counter should start at 0 and cannot go below 0.
// In this solution, we start by defining a state variable called count using the useState hook. This variable stores the current count and is initially set to 0. We also define two event handlers: handleIncrement and handleDecrement.
// handleIncrement is called when the "+" button is clicked. It increases the count state by 1.
// handleDecrement is called when the "-" button is clicked. It checks if the count state is greater than 0, and if it is, it decreases the count state by 1.
// We then render the current count state inside a p tag, along with two buttons for increment and decrement. We attach the onClick event handler to each button, which calls the appropriate event handler.

import React from "react";
import Counter from "./Counter";

const App = () => {
  return <Counter />;
};

export default App;
