import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import dummy_data from "../../data.json"

class ListNews extends Component {

  render() {
    console.log(dummy_data);
    return (
      <div className="container">
        <div className="row">
          {
            dummy_data.map(
              (post, i) => <NewsItem key={i} post={post}/>
            )
          }
        </div>
      </div>

    );
  }
}

export default ListNews;