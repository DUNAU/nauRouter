import React from 'react';
import logo from './logo.svg';
import { Menu, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import './style.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from './pages/home'
import { University } from './pages/university'
import univercityList from './locations/univercity.json';
import cityList from './locations/city.json';
import { City } from './pages/city'

const NavMenu = () => {
  return <footer>
    <Link to='/' className="footer-item">
        <div className="item-img home"></div>
        <div className="item-text">Home</div></Link>
    <Link to='university' className="footer-item">
        <div className="item-img plane"></div>
        <div className="item-text">NAU</div>
        </Link>
    <Link to='/city' className="footer-item">
        <div className="item-img city"></div>
        <div className="item-text">City</div></Link>
  </footer>
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={`/university`} component={() => University(univercityList)} />
          <Route path={`/city`} component={() => City(cityList)} />
          <Route component={Home} />
        </Switch>
      </div>
      <NavMenu />
    </Router>
  );
}

export default App;
