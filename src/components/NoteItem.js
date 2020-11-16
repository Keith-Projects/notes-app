import React, { Component } from "react";

export class NoteItem extends Component {
  render() {
    const { id, note, dateCreated } = this.props.note;
    return (
      <div className="container-fluid">
        <div className="card">
          <div className="card-block">
            <div className="card-header">
              <p className="card-title">{dateCreated}</p>
            </div>

            <div className="card-body">
              <p>{note}</p>
            </div>

            <div className="card-footer">
              <button type="button">Delete</button>
              <button type="button">Edit</button>
              <button type="button" disabled={true}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteItem;
