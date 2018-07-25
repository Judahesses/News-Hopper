import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import CreatePost from '../CreatePost';
import StarRatingComponent from "react-star-rating-component";



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
    const { rating } = this.state;
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
            <p className="title">{review.title}</p>
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={review.stars}
              />
            <p className="body">{review.body}</p>
            <p className="author">By {review.author}</p>
            <p className="created-at">{moment(this.state.created_at).format("LL")}</p>
            <Link className="link" to={`/edit-post/${review.id}`}>Edit</Link>
            </div>
            )
         })}
        </div>
      </div>
      );
    }
  }

export default FeedbackPage;
