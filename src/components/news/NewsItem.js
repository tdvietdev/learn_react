import React, {Component} from 'react';

class NewsItem extends Component {


  to_slug = (str) => {
    str = str.toLowerCase();
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
  }

  render() {
    return (
      <div className="col-4">
        <div className="card-deck">
          <div className="card">
            <a href={"post/" + (this.props.post.title) + "." +this.props.post.id + ".html"}>View details</a>
            <div className="card-body">
              <h4 className="card-title">{this.props.post.title}</h4>
              <p className="card-text">{this.props.post.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;