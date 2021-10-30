import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MemberShip from './pages/MemberShip';
import About from './pages/About';
import ArtisteDrop from './pages/ArtisteDrop';
import Contact from './pages/Contact';
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
        <Route path="/artiste-drop" exact component={ArtisteDrop} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
