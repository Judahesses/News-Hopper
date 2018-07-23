import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import TechnologyPage from '../TechnologyPage';
import BusinessPage from '../BusinessPage';
import PoliticsPage from '../PoliticsPage';
import EntertainmentPage from '../EntertainmentPage';
import SportsPage from '../SportsPage';
import SciencePage from '../SciencePage';
import HomePage from "../HomePage";
import SinglePage from "../SinglePage";
import BookmarkPage from "../BookmarkPage";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  articleOnClick = (article) => {
    console.log('App.js', article)
    this.setState ({
      currentArticle: article
    }, console.log('state:', this.state))
  }
 render() {
   return(
    <Router>
      <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route path='/technology' render={(props) => <TechnologyPage articleOnClick={this.articleOnClick} /> } />
         <Route path='/business' render={(props) => <BusinessPage articleOnClick={this.articleOnClick} />} />
         <Route path='/politics' render={(props) => <PoliticsPage articleOnClick={this.articleOnClick} />} />
         <Route path='/entertainment' render={(props) => <EntertainmentPage articleOnClick={this.articleOnClick} />} />
         <Route path='/sports' render={(props) => <SportsPage articleOnClick={this.articleOnClick} />} />
         <Route path='/science' render={(props) => <SciencePage articleOnClick={this.articleOnClick} />} />
        <Route path='/article' render={(props) => <SinglePage  currentArticle={this.state.currentArticle}/> } />
      </div>
    </Router>
   );
 }
}

export default App;
