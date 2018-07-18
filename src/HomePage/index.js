import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends Component {

 render() {
   return(
     <div className="top">
     <div className="tech">
      <Router>
     <Link to="/technology">Technology</Link>
     </Router>
     </div>
     <div className="business">
     <Router>
     <Link to="/business">Business</Link>
     </Router>
     </div>
     <div className="politics">
     <Router>
     <Link to="/politics">Politics</Link>
     </Router>
     </div>
     <div className="sports">
     <Router>
     <Link to="/sports">Sports</Link>
     </Router>
     </div>
     <div className="culture">
     <Router>
     <Link to="/culture">Culture</Link>
     </Router>
     </div>
    
     </div>
   );
 }
}

export default HomePage;


