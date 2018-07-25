import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';

class EditPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        author: '',
        stars: 1,
        title: '',
        body: '',
        updated: false,
        deleted: false
      }
    }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ stars: nextValue });
  }

    componentDidMount() {
      fetch(`/posts/${this.props.match.params.id}.json`)
        .then(response => {
          return response.json()
        })
        .then(post => {
          this.setState({
            author: post.author,
            stars: post.stars,
            title: post.title,
            body: post.body,
          })
        })
    }

    onFormChange(evt) {
      const domElement = evt.target;
      const stateProperty = domElement.getAttribute('name');
      const newState = {};
      newState[stateProperty] = domElement.value;
      this.setState(newState);
    }

    onSubmitClick(evt) {
      fetch(`/posts/${this.props.match.params.id}.json`, {
        method: 'PUT',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json)
        .then(post => {
          this.setState({
            updated: true
          });
        });
    }

    onDelete(evt) {
      fetch(`/posts/${this.props.match.params.id}.json`, {
        method: 'DELETE',

      }).then(response => response.json)
      .then(post => {
        this.setState({
          deleted: true
        })
      })

    }

    render() {
      const { stars } = this.state;

            if(this.state.updated || this.state.deleted) {
                return <Redirect to='/feedback' />;
            }
            return (
            <div className='EditPost'>
                <nav className='nav'>
                    <p><Link className='home' to='/'>Home</Link></p>
                    <nav className='nav-categories'>
                        {/* <Link to="/reviews" className="reviews-link">Reviews</Link>
                        <Link to="/suggestions" className="suggestions-link">Suggestions</Link> */}
                         <Link to="/create-post" className="create-post-link">Write a Review!</Link>
                         <Link to="/feedback" className="reviews-link">Reviews</Link>
                    </nav>
                </nav>
                <h2 className="edit-post-title">Edit Review!</h2>
                <div className="edit-post-container">
                    <div className="form">

                        <form onChange={evt => this.onFormChange(evt)}>
                        <div>
                            <label htmlFor="name">
                            </label>
                            <input
                            className="name-input"
                            type="text"
                            name="author"
                            placeholder="Your name..."
                            autocomplete="off"
                            value={this.state.author}
                            required
                            />
                            </div>
                            <div>
                        <p><StarRatingComponent
                          className="rating-input"
                          name="stars"
                          starCount={5}
                          value={this.state.stars}
                          onStarClick={this.onStarClick.bind(this)}
                          /></p>
                            </div>
                            <div>
                            <input
                            className="title-input"
                            type="text"
                            name="title"
                            placeholder="Title..."
                            autocomplete="off"
                            value={this.state.title}
                            required
                            />
                            </div>
                            <div>
                            <textarea
                            rows="5"
                            cols="50"
                            className="body-input"
                            type="text"
                            name="body"
                            placeholder="Description..."
                            autocomplete="off"
                            value={this.state.body}
                            required
                            />
                            </div>
                            <div>
                            <button className="edit-post" type="button" onClick={evt => this.onSubmitClick(evt)}>Edit Post</button>
                          </div>
                        </form>
                        <form>
                          <button className="delete-post" type="button" onClick={evt => this.onDelete(evt)}>Delete Post</button>
                        </form>
                    </div>
                </div>
            </div>
          );
        }
      }

export default EditPost;
