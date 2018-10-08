import React, {Component} from 'react';

class Post extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Fluid jumbo heading</h1>
            <p className="lead">Jumbo helper text</p>
            <hr className="my-2" />
            <p>More info More info More info More info More info More info More info More info More info More info More info </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;