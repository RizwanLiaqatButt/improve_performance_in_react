import React, { Component } from "react";

class HookMethod extends Component {
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.inc !== this.props.inc || nextProps.dec !== this.props.dec;
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
