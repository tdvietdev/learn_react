import React, {Component} from 'react';
import News from "./news";

class ListNews extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <News/>
          <News/>
          <News/>
          <News/>
          <News/>
          <News/>
        </div>
      </div>

    );
  }
}

export default ListNews;