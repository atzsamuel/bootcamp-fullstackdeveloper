import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super();

    this.state = {
      counter: 0
    }
    this.decrementC = this.decrementC.bind(this);
    this.incrementC = this.incrementC.bind(this);
  }

  decrementC() {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  }
  incrementC() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  render() {

    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
        <button id="decrement" type="button" onClick={this.decrementC}>
          Decrement
        </button>
        <button id="increment" type="button" onClick={this.incrementC}>
          Increment
        </button>
      </div>
    )
  }
}