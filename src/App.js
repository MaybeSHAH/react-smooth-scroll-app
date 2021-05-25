import React from 'react';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/linkedin' component={() =>{
            window.location.href = "https://www.linkedin.com/in/liyakat-shaikh-120219136/";
        }} exact />
        <Route path='/github' component={() =>{
            window.location.href = "https://github.com/MaybeSHAH";
        }} exact />
      </Switch>
    </Router>
  );
}

export default App;
