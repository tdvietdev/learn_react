import React, {Component} from 'react';

class News extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card-deck">
          <div className="card">
            <a href="chitiet.html">Link</a>
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;