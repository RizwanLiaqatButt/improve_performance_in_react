import React, { PureComponent } from "react";

class HookMethod extends PureComponent {
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div>
        <p>hook INC: {this.props.inc}</p>
        <p>hook DEC: {this.props.dec}</p>
      </div>
    );
  }
}

export default HookMethod;
