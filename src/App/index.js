import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TechnologyPage from '../TechnologyPage';
import HomePage from "../HomePage";

class App extends Component {
 render() {
   return( 
    <Router>
      <div className="App">
        <nav className='nav'>
          <Link to='/'>Home</Link>
        </nav>
        <Route exact path='/' component={HomePage} />
        <Route path='/technology' component={TechnologyPage} />
      </div>
    </Router>
   );
 }
}

export default App;
<<<<<<< HEAD
=======


>>>>>>> master
