import React, {Component} from 'react';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0
    }
  }

  notifice = () => {
    alert("Hehehehe")
  }

  showEditer = () => {
    this.setState({status:1});
  }
  saveClick = () => {
    this.setState({status:0});
  }
  displayCheck = () => {
    if (this.state.status == 0){
      return this.renderButton();
    } else{
      return this.renderForm()
    }
  }
  renderButton = () => (
    <div className="row">
      <div className="btn-group">
        <div className="btn btn-info" onClick={() =>this.showEditer()}>Edit</div>
        <div className="btn btn-warning" onClick={() => this.notifice2()}>Remove</div>
      </div>
    </div>
  )
  renderForm = () => (
    <div className="row">
      <div className="form-group">
        <input defaultValue={this.props.title} type="text" name="name" className="form-control"/>
        <div className="btn btn-success btn-block" onClick={()=>this.saveClick()}> Save </div>
      </div>
    </div>
  )

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
            {this.displayCheck()}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;