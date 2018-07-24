import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


//adapted from building example
class FeedbackPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      topic_id: "",
      stars: 0,
      author: "",
      created_at: "",
      title: "",
      body: "",
    }
  }

  componentDidMount() {
    let id = this.props.id;
    console.log(id)
    fetch(`/posts/${id}.json`)
    //.then(response => response.json())
    // .then(feedback => {
    //   console.log(feedback)
    //   this.setState(feedback)
    // })
  }

  

  render() {

    if (this.state.deleted === true) {
      return <Redirect to="/" />
    }

    return (
        <div className="Post">
          <div className="post-feedback">
            <p>{this.author}</p>
            <p>{this.props.body}</p>
            <p>{this.props.created_at}</p>
            <p>{this.props.stars}</p>
          </div>
        </div>
    );
  }
}


export default FeedbackPage;
