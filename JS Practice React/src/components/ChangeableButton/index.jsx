import * as React from "react";

class ChangeableButton extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
  }

  render() {
    return (
      <button onClick={() => this.setState({ show: !this.state.show })}>
        {this.state.show ? "Show" : "Hide"}
      </button>
    );
  }
}

export default ChangeableButton;
