import React, { Component } from "react";

export class NewNote extends Component {
  render() {
    return (
      <div className="container">
        <h2>Create New Note</h2>
        <hr></hr>
        <div className="container fluid">
          <form id="newNoteForm">
            <div className="control-group">
              <div className="form-group">
                <label className="label" for="newNote">
                  Note:
                </label>
                <textarea id="newNote" className="form-control"></textarea>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  id="newNoteSubmitBtn"
                  className="btn btn-success btn-xl"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewNote;
