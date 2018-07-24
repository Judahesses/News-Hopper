import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class CreatePost extends Component {
    render() {
        return(
            <div className='CreatePost'>
                <nav className='nav'>
                    <p><Link className='home' to='/'>Home</Link></p>
                    <nav className='nav-categories'>
                        <Link to="/reviews" className="reviews-link">Reviews</Link>
                        <Link to="/suggestions" className="suggestions-link">Suggestions</Link>
                    </nav>
                </nav>

                <div className="create-post-form">
                    <div className="form">
                        <form>
                            Your Feedback:
                            <input type="text" name="feedback"/>
                            <input type="submit" name="Submit" action="/"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePost;          