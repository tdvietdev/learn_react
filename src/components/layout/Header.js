import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-7 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-5">Home</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

    );
  }
}

export default Header;