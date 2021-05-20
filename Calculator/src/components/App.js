import React, { Component } from "react";

import Output from "./output";
import Keypad from "./keypad";
import "../style.css";

function Apps() {
  <h1> Hi </h1>
}

class App extends Component {
  state = {
    result: ""
  };

  buttonPressed = buttonName => {
    if (buttonName === "=") {
      this.calculate();
    } else {
      this.setState({ result: this.state.result + buttonName });
    }
    if (buttonName === "CE") {
      this.backspace();
    }
    if (buttonName === "C") {
      this.reset();
    }
    if (buttonName === "sin") {
      this.sine();
    }
    if (buttonName === "cos") {
      this.cosine();
    }
    if (buttonName === "tan") {
      this.tan();
    }
    if (buttonName === "log") {
      this.log();
    }
    if (buttonName === "sqrt") {
      this.sqrt();
    }
  };

  sine = () => {
    this.setState({
      result: Math.sin(this.state.result)
    });
  };
  cosine = () => {
    this.setState({
      result: Math.cos(this.state.result)
    });
  };
  tan = () => {
    this.setState({
      result: Math.tan(this.state.result)
    });
  };
  log = () => {
    this.setState({
      result: Math.log10(this.state.result)
    });
  };
  sqrt = () => {
    this.setState({
      result: Math.sqrt(this.state.result)
    });
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result)
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="content">
          <Output result={this.state.result} />
          <Keypad buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}
export default App;
