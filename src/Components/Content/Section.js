import React, {Component} from 'react';

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="col-lg-4">
            <div className="row">
              <div className={"col-lg-5 " + this.props.position}>
                <div className="p-1">
                  <img className="img-fluid rounded-circle" src="img/01.jpg" alt />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="p-1">
                  <h2 className="display-6">{this.props.title}</h2>
                  <p> beatae obcaecati</p>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Section;