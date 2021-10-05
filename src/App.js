import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MemberShip from './pages/MemberShip';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/scss/main.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/member-ship" exact component={MemberShip} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
