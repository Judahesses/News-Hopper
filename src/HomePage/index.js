import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends Component {

 render() {
   return(
     <div className='HomePage'>
       <h1 className='app-title'>News-Hopper</h1>
        <div className="categories">
          <a href='/technology'className="tech">
          <Link to="/technology" className="tech-link-home">Technology</Link>
          </a>
          <a href='/business' className="business">
          <Link to="/business" className="business-link-home">Business</Link>
          </a>
          <a href='/politics' className="politics">
          <Link to="/politics" className="politics-link-home">Politics</Link>
          </a>
          <a href='/entertainment' className="entertainment">
          <Link to="/entertainment" className="entertainment-link-home">Entertainment</Link>
          </a>
          <a href='/sports' className="sports">
          <Link to="/sports" className="sports-link-home">Sports</Link>
          </a>
          <a href='/science' className="science">
          <Link to="/science" className="science-link-home">Science</Link>
          </a>
        </div>  
        <div className='feedback-container'>
            <a href='/feedback' className="feedback">
            <Link to="/feedback" className="feedback-link-home">Feedback</Link>
            </a>
        </div>
    </div> 
    );
  }
}

export default HomePage;