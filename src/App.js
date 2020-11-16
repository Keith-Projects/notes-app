import React, { Component } from "react";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header.js";
import Notes from "./components/Notes";
import Footer from "./components/layout/Footer";

export class App extends Component {
  state = {
    NotesList: [],
  };

  addNewNote = (noteHere, date) => {
    const createId = this.state.NotesList.length - 1;
    const myNote = {
      id: createId,
      note: noteHere,
      dateCreated: date,
    };

    this.state.NotesList.push(myNote);
    this.setState({
      NotesList: this.state.NotesList,
    });
  };

  // delete note
  deleteNote = (id) => {
    this.setState({
      NotesList: [...this.state.NotesList.filter((item) => item.id !== id)],
    });
  };
  render() {
    return (
      <div className="container" id="page-top">
        <Nav />
        <Header />
        <Notes
          notes={this.state.NotesList}
          AddNewNote={this.addNewNote}
          delete={this.deleteNote}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
