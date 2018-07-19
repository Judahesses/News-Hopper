import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TechnologyPage from '../TechnologyPage';
import BusinessPage from '../BusinessPage';
import PoliticsPage from '../PoliticsPage';
import EntertainmentPage from '../EntertainmentPage';
import SportsPage from '../SportsPage';
import SciencePage from '../SciencePage';
import HealthPage from '../HealthPage';
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
        <Route path='/business' component={BusinessPage} />
        <Route path='/politics' component={PoliticsPage} />
        <Route path='/entertainment' component={EntertainmentPage} />
        <Route path='/sports' component={SportsPage} />
        <Route path='/science' component={SciencePage} />
        <Route path='/health' component={HealthPage} />
      </div>
    </Router>
   );
 }
}

export default App;
