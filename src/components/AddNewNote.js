import React, { Component } from "react";

export class AddNewNote extends Component {
  state = {
    note: "",
    dateCreated: new Date().toLocaleDateString(),
  };

  handleChange = (e) => {
    this.setState({
      note: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.note);
    this.setState({
      note: "",
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <form id="addNewNote" onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="form-group row">
              <div className="col-5 mx-auto">
                <label htmlFor="noteArea">Note:</label>
                <textarea
                  id="noteArea"
                  onChange={this.handleChange}
                  rows="4"
                  placeholder="Type your new note here..."
                  value={this.state.note}
                ></textarea>
              </div>
              <div className="col-5 mx-auto">
                <button
                  type="submit"
                  id="addNewNoteSubmitBtn"
                  className="btn btn-secondary btn-xl"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewNote;
