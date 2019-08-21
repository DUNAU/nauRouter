import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import './style.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from './pages/home'
import { University } from './pages/university'
import univercityList from './locations/univercity.json';
import cityList from './locations/city.json';
import channels from './locations/channels.json'
import otherPlaces from './locations/other.json'
import { City } from './pages/city'
import { Other } from './pages/other'

const NavMenu = () => {
  return <footer>
    <Link to='/' className="footer-item">
        <div className="item-img home"></div>
        <div className="item-text">Головна</div></Link>
    <Link to='university' className="footer-item">
        <div className="item-img plane"></div>
        <div className="item-text">НАУ</div>
        </Link>
    <Link to='/city' className="footer-item">
        <div className="item-img city"></div>
        <div className="item-text">Cтудміст.</div></Link>
    <Link to='other' className="footer-item">
        <div className="item-img other"></div>
        <div className="item-text">Інше</div>
        </Link>
  </footer>
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={`/university`} component={() => University(univercityList)} />
          <Route path={`/city`} component={() => City(cityList)} />
          <Route path={`/other`} component={() => Other(otherPlaces)} />
          <Route component={() => Home(channels)} />
        </Switch>
      </div>
      <NavMenu />
    </Router>
  );
}

export default App;
