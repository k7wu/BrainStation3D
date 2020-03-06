import React, { Component } from "react";
import axios from "axios";

class Topics extends Component {
  state = {
    topicList: []
  };

  componentDidMount() {

    //getting data from a single warehouse
    axios.get(`/api/ted/topics`)
      .then(response => {
        this.setState({
          topicList: response.data
        });
        console.log("here");
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.topicList.length === 0) return <h1>loading</h1>
    return (

      <div className="hero__topics">

        {this.state.topicList.map(topicItem => (
          <>
            <button className="hero__btn-topic">
              {topicItem.topics}
            </button>
          </>
        ))}
      </div >
    );
  }
}

export default Topics;
