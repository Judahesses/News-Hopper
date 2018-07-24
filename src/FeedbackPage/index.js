import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class FeedbackPage extends Component {
   render() {
    return (
      <div className='FeedbackPage'>
         <h1>Hello World!</h1>
      </div>
    )
  }
}

export default FeedbackPage;
