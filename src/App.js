import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import TopMenu from "./Components/TopMenu/TopMenu";
import Header from "./Components/Header/Header";
import Section from "./Components/Content/Section";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="Test">
        <TopMenu/>
        <Header/>
        <div className="container">
          <div className="row pt-5">
            <Section title = "Tieu de ne"/>
            <Section title = "Tieu de ne 2"/>
            <Section title = "Tieu de ne 3"/>
            <Section title = "Tieu de ne 4"/>
            <Section title = "Tieu de ne 5"/>
            <Section title = "Tieu de ne 6"/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
