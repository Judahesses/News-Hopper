import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends Component {

 render() {
   return(
      <div className="categories">
        <Link to="/technology">Technology</Link>
        <Link to="/business">Business</Link>
        <Link to="/politics">Politics</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/science">Science</Link>
      </div>
   );
 }
}

export default HomePage;


