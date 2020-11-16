import React, { Component } from "react";

export class NoteItem extends Component {
  handleDelete = () => {
    this.props.delNote(this.props.noteId);
  };

  handleEdit(e) {}
  render() {
    const { id, note, dateCreated } = this.props.note;
    return (
      <div className="container">
        <div className="card">
          <div className="card-block">
            <div className="card-header">
              <p className="card-title">
                <button
                  type="button"
                  onClick={this.handleDelete}
                  className="btn btn-danger"
                >
                  X
                </button>
                {note}
              </p>
            </div>

            <div className="card-body">
              <p>{dateCreated}</p>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteItem;
