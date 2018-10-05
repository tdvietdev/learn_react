import React, { Component } from 'react';
import '../css/App.css';
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ListNews from "./news";
import Contact from "./contacs";
import Post from "./post";
import Redirect from "./route/redirect";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav/>
        <Header/>
        <Redirect/>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
