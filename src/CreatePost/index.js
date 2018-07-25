import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
    //   id: 0,
    //   topic_id: "",
      author: "",
      stars: "",
      title: "",
      body: "",
      rating: 1,
      created: false
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormChange(evt) {
    const element = evt.target;
    const name = element.name;
    const value = element.value;

    const newState = {};
    newState[name] = value;
    this.setState(newState);

  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const newPost = {
    //   topic_id: this.state.topic_id,
      author: this.state.author,
      stars: this.state.stars,
      title: this.state.title,
      body: this.state.body
    }
    console.log(newPost);
    fetch('/posts.json', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
    .then(post => {
      this.setState({
        created: true
      })
    })
}
    render() {
        if (this.state.created === true) {
            return(
            <Redirect to="/feedback" />
        )
    }
        return(
            <div className='CreatePost'>
                <nav className='nav'>
                    <p><Link className='home' to='/'>Home</Link></p>
                    <nav className='nav-categories'>
                        {/* <Link to="/reviews" className="reviews-link">Reviews</Link> */}
                        {/* <Link to="/suggestions" className="suggestions-link">Suggestions</Link> */}
                        <Link to="/feedback" className="reviews-link">Reviews</Link>
                    </nav>
                </nav>

                <div className="create-post-form">
                    <div className="form">

                        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit} >
                <div>
                    <label htmlFor="name">Your Name: </label>
                    <input
                    type="text"
                    name="author"
                    placeholder="Your name..."
                    value={this.state.author}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="year_built">Rating: </label>
                    <input
                    type="text"
                    name="stars"
                    placeholder="Rating 1-5"
                    value={this.state.stars}
                    />
                </div>
                <div>
                    <label htmlFor="city">Title: </label>
                    <input
                    type="text"
                    name="title"
                    placeholder="City Name"
                    value={this.state.title}
                    />
                </div>
                <div>
                    <label htmlFor="architect">Building Architect: </label>
                    <input
                    type="text"
                    name="body"
                    placeholder="Building Architect"
                    value={this.state.body}
                    />
                </div>
                <div>
                    <input
                    type="submit"
                    value="Add Post"
                    />
                </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePost;
