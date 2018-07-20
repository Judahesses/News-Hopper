import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//form adapted from https://www.w3schools.com/tags/att_textarea_form.asp
class CommentPage extends Component {
    render() {
        return (
           <div>
            <div className="comment-head">
            <h1>Write your Comment.</h1>
            </div>
            <div className="form">
            <form action="/technologycom">
            Comment: <input type="text" comment="comment">
            </input>
            <input type="submit">
            </input>
            </form>
            </div>
            </div>
        )
        }
    }



export default CommentPage;