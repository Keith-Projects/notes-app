import React, { Component } from "react";
import Button from "./Button";

export class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-block">
            <div className="card-body">{this.props.note}</div>

            <div className="card-footer">
              <Button id={this.props.id} onClick={this.props.btnClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
