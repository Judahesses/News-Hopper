import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import CreatePost from '../CreatePost';


//adapted from building example
class FeedbackPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch('/reviews.json')
      .then(response => response.json())
      .then(reviews => {
        console.log(reviews)
        this.setState({
          reviews: reviews.posts
      });
    });
  }


  render() {
    console.log(this.state)
    return (
          <div className='FeedbackPage'>
            <nav className='nav'>
              <p><Link className='home' to='/'>Home</Link></p>
              <nav className='nav-categories'>
                {/* <Link to="/reviews" className="reviews-link">Reviews</Link> */}
                <Link to="/create-post" className="create-post-link">Write a Review!</Link>
                {/* <Link to="/suggestions" className="suggestions-link">Suggestions</Link> */}
              </nav>
            </nav>

          <div className="post-feedback">
          {this.state.reviews.map(review => {
            return (
            <div className="feedback-container">
            <p>{review.stars}</p>
            <p>{review.author}</p>
            <p>{review.created_at}</p>
            <p>{review.title}</p>
            <p>{review.body}</p>
            </div>
            )
         })}
        </div>
      </div>
      );
    }
  }


export default FeedbackPage;
