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
    return (
          <div className='FeedbackPage'>
            <nav className='nav'>
              <p><Link className='home' to='/'>Home</Link></p>
              <nav className='nav-categories'>
                <Link to="/reviews" className="reviews-link">Reviews</Link>
                <Link to="/create-post" className="create-post-link">Create a Post!</Link>
                <Link to="/suggesstions" className="suggestions-link">Suggestions</Link>
              </nav>
            </nav>

          <div className="post-feedback">
            <p>{this.props.author}</p>
            <p>{this.props.body}</p>
            <p>{this.props.created_at}</p>
            <p>{this.props.stars}</p>
          </div>
        </div>
    );
  }
}


export default FeedbackPage;
