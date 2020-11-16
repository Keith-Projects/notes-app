import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <button
        id={this.props.id}
        type="button"
		className="btn btn-primary btn-xl"
		onClick={this.props.onClick}
      >
        My button
      </button>
    );
  }
}

export default Button;
