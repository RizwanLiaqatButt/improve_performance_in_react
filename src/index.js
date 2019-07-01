import React, { Component } from "react";
import ReactDOM from "react-dom";
import Memo from "./functionalComponents/memo";
import HookMethod from "./statefulComponents/hookMethod";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          INC
        </button>

        <button
          onClick={() => {
            this.setState({ count: this.state.count });
          }}
        >
          DEC
        </button>
        <Memo inc={this.state.count} dec={this.state.count} />
        <HookMethod inc={this.state.count} dec={this.state.count} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
