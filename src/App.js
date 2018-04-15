import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import Nav from './Nav';

class App extends Component {
  debugger;
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Recipes} />
              <Route path="/addrecipe" component={AddRecipe} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
