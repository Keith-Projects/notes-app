import React, { Component } from "react";
import NoteItem from "./NoteItem";
import AddNewNote from "./AddNewNote";

export class Notes extends Component {
  render() {
    return (
      <section className="page-section notes-list">
        <AddNewNote />
        {this.props.notes.map((note) => {
          return <NoteItem note={note} key={note.id} />;
        })}
      </section>
    );
  }
}

export default Notes;