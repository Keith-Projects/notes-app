import React, { Component } from "react";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header.js";
import Notes from "./components/Notes";
import Footer from "./components/layout/Footer";

export class App extends Component {
  state = {
    NotesList: [
      {
        id: -1,
        note: "",
        dateCreated: "",
      },
    ],
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/Notes_App_API/api/Notes/read.php")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          NotesList: [...data.map((item) => item)],
        });
      });
  }

  addNewNote = (noteHere, date) => {
    let xhr = new XMLHttpRequest();
    let data = new FormData();
    data.append("note", noteHere);
    data.append("date", date);

    xhr.open(
      "post",
      "http://localhost:5000/api/Notes_App_API/api/Notes/create.php",
      true
    );
    xhr.send(data);

    xhr.onreadystatechange = () => {
      if (xhr.status == 200 && xhr.readyState == 4) {
        let data = JSON.parse(xhr.responseText);
        this.setState({
          NotesList: [...data.map((item) => item)],
        });
      }
    };
  };

  // delete note
  deleteNote = (id) => {
    let xhr = new XMLHttpRequest();
    let data = new FormData();

    // append the form data
    data.append("id", id);

    // open and send
    xhr.open(
      "POST",
      "http://localhost:5000/api/Notes_App_API/api/Notes/delete.php",
      true
    );
    xhr.send(data);

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let dataObj = JSON.parse(xhr.responseText);
        if (dataObj.message) {
          this.setState({
            NotesList: [],
          });
        } else {
          this.setState({
            NotesList: [...dataObj.map((item) => item)],
          });
        }
      }
    };
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
