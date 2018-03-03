import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import QuizApp from './pages/Quiz';
import Welcome from './components/Welcome';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/quiz" component={QuizApp} />
      </Switch>
    </div>
  </Router>;

export default App;
