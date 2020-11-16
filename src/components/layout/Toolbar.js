import React, { Component } from "react";

export class Toolbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary py-2" id="toolbar">
        <div className="container">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#myToolbar"
            aria-controls="myToolbar"
            aria-expanded="false"
            aria-label="Toggle Toolbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myToolbar">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <button className="nav-link text-center" id="createNewNote" onClick={this.props.newNote}>
                  New Note
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Toolbar;
