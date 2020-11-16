import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-block">
            <div className="card-header">
              <h1 className="card-title">{this.props.title}</h1>
            </div>

            <div className="card-body">{this.props.bodyContent}</div>

            <div className="card-footer">{this.props.footerContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
