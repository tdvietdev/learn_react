import React, { Component } from 'react';
import '../css/App.css';
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ListNews from "./news";
import Contact from "./contacs";
import Post from "./post";
import Redirect from "./route/redirect";

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Header/>
        <Redirect/>
        <Footer/>
      </div>
    );
  }
}

export default App;
