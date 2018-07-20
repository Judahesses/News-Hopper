import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TechnologyPage from '../TechnologyPage';
import BusinessPage from '../BusinessPage';
import PoliticsPage from '../PoliticsPage';
import EntertainmentPage from '../EntertainmentPage';
import SportsPage from '../SportsPage';
import SciencePage from '../SciencePage';
import HomePage from "../HomePage";
import CommentPage from "../CommentPage";

class App extends Component {
 render() {
   return( 
    <Router>
      <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route path='/technology' component={TechnologyPage} />
        <Route path='/business' component={BusinessPage} />
        <Route path='/politics' component={PoliticsPage} />
        <Route path='/entertainment' component={EntertainmentPage} />
        <Route path='/sports' component={SportsPage} />
        <Route path='/science' component={SciencePage} />
        <Route path='/technologycom' component={CommentPage} />
      </div>
    </Router>
   );
 }
}

export default App;