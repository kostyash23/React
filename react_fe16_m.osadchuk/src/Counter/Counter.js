import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  // constructor() {

  //   super ();

  //   this.state = {
  //     count: 0,
  //   }
  //   this.reset = this.reset.bind(this);
  // }

  state = {
    count:0,
  }
  increment = () =>{
this.setState(prevstate => ({ count : prevstate.count + 1}));
  }
  decrement()  {
    console.log("World");
  }
  reset() {
    this.setState({
      count:0
    })
    console.log(this);
  }
  render() {
    return (
      <div id="counter-app">
        <div id="display-container" className="container">
          <p id="display">{this.state.count}</p>
        </div>
        <div id="buttons-container" className="container">
          <button
            id="increment-button"
            className="button"
            type="button"
            onClick={this.increment}
          >
            <i className="fa fa-plus" />
          </button>
          <button
            id="decrement-button"
            className="button"
            type="button"
            onClick={this.decrement}
          >
            <i className="fa fa-minus" />
          </button>
          <button
            id="reset-button"
            className="button"
            type="button"
            onClick={this.reset.bind(this)}
          >
            <i className="fa fa-refresh" />
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
