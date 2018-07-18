import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends Component {

 render() {
   return(
      <div className="categories">
        <Link to="/technology">technology</Link>
      </div>
   );
 }
}

export default HomePage;


