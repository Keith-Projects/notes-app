import React, { Component } from "react";
import Nav from "./components/layout/Nav";
import Header from './components/layout/Header.js';
import Notes from "./components/Notes";
import Footer from './components/layout/Footer';

export class App extends Component {
  state = {
    NotesList: [
      {
        id: 0,
        note: "peanut butter, dog food, peaches.",
        dateCreated: new Date().toLocaleDateString(),
      },
      {
        id: 1,
        note: "Business Address: 123 cherry LN Palatka, Fl 32177",
        dateCreated: new Date("10/19/2018").toLocaleDateString(),
      },
    ],
  };
  render() {
    return (
      <div className="container" id="page-top">
        <Nav />
        <Header/>
        <Notes notes={this.state.NotesList} />
        <Footer/>
      </div>
    );
  }
}

export default App;
