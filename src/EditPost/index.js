import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class EditPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        author: '',
        stars: '',
        title: '',
        body: '',
        updated: false,
        deleted: false
      }
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
            if(this.state.updated || this.state.deleted) {
                return <Redirect to='/feedback' />;
            }
            return (
            <div className='CreatePost'>
                <nav className='nav'>
                    <p><Link className='home' to='/'>Home</Link></p>
                    <nav className='nav-categories'>
                        {/* <Link to="/reviews" className="reviews-link">Reviews</Link>
                        <Link to="/suggestions" className="suggestions-link">Suggestions</Link> */}
                         <Link to="/create-post" className="create-post-link">Write a Review!</Link>
                         <Link to="/feedback" className="reviews-link">Reviews</Link> 
                    </nav>
                </nav>

                <div className="create-post-form">
                    <div className="form">

                        <form onChange={evt => this.onFormChange(evt)}>
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
                    <button type="button" onClick={evt => this.onSubmitClick(evt)}>Submit</button>
                </div>
                        </form>
                    <form> 
                        <button type="button" onClick={evt => this.onDelete(evt)}>Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditPost;          