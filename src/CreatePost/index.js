import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class CreatePost extends Component {
    render() {
        return(
            <div className="make-post">
            <div className="form">
            <form>
            Your Feedback:
            <input type="text" name="feedback"/>
            <input type="submit" name="Submit" action="/"/>
            </form>
            </div>


            </div>
             );
            }
          }
export default create-post;          