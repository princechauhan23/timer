import React from "react";
import "./styles.css";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      count1: 0,
      timerId1: ""
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      if (this.state.count === 9) {
        clearInterval(this.timerId);
      }
      this.setState((prevState) => {
        return {
          count: prevState.count + 1
        };
      });
    }, 1000);

    const timerId1 = setInterval(() => {
      this.setState((prevState) => {
        return {
          count1: prevState.count1 + 1
        };
      });
    }, 1000);
    this.setState({ timerId1 });
  }

  clear() {
    clearInterval(this.state.timerId1);
  }

  render() {
    return (
      <div className="App">
        <div className="counter0">
          <p>Counter : {this.state.count} </p>
        </div>
        <div className="counter1">
          <p>Counter1 : {this.state.count1} </p>
        </div>
        <button onClick={this.clear} className="play-pause">
          play
        </button>
      </div>
    );
  }
}

export default Counter;
