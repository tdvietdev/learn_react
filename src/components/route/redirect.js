import React, {Component} from 'react';
import Contact from "../contacs";
import ListNews from "../news";
import Home from "../home";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Post from "../post";

class Redirect extends Component {
  render() {
    return (
<div>
  <Route exact path="/" component={Home} />
  <Route exact path="/contact" component={Contact} />
  <Route exact path="/news" component={ListNews} />
  <Route exact path="/post/:slug.:id.html" component={Post} />
</div>
    );
  }
}

export default Redirect;