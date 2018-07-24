import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "../HomePage";
import CategoryPage from '../CategoryPage'

class App extends Component {
 render() {
   return(
    <Router>
      <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route path='/technology' component={CategoryPage} />
         <Route path='/business' component={CategoryPage} />
         <Route path='/politics' component={CategoryPage} />
         <Route path='/entertainment' component={CategoryPage} />
         <Route path='/sports' component={CategoryPage} />
         <Route path='/science' component={CategoryPage} />
      </div>
    </Router>
   );
 }
}

export default App;
