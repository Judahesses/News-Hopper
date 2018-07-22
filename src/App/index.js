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
import CommentPage from "../CommentPage";
import SinglePage from "../SinglePage";


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
        <Route path='/business' component={BusinessPage} />
        <Route path='/politics' component={PoliticsPage} />
        <Route path='/entertainment' component={EntertainmentPage} />
        <Route path='/sports' component={SportsPage} />
        <Route path='/science' component={SciencePage} />
        <Route path='/technologycom' component={CommentPage} />
        <Route path='/article' render={(props) => <SinglePage  currentArticle={this.state.currentArticle}/> } />
      </div>
    </Router>
   );
 }
}

export default App;
