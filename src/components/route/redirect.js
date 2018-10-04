import React, {Component} from 'react';
import Contact from "../contacs";
import ListNews from "../news";
import Home from "../home";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Redirect extends Component {
  render() {
    return (
      <BrowserRouter>
<div>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/news" component={ListNews} />
</div>
      </BrowserRouter>
    );
  }
}

export default Redirect;