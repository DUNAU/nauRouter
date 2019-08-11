import React from 'react';
import logo from './logo.svg';
import { Menu, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from './pages/home'
import { University } from './pages/university'
import univercityList from './locations/univercity.json';
import cityList from './locations/city.json';
import { City } from './pages/city'
import { Administration } from './pages/administration'


const NavMenu = () => {
  return <Menu compact icon='labeled' className='mainMenu'>
        <Menu.Item name='home'>
          <Link to='/' className='items'>
            <Icon name='home' />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item name='university'>
          <Link to='university'>
            <Icon name='plane' />
            NAU
          </Link>
        </Menu.Item>

        <Menu.Item
          name='city'
        >
          <Link to='city'>
            <Icon name='users' />
            City
          </Link>
        </Menu.Item>

        <Menu.Item
          name='administration'
        >
          <Link to='administration'>
            <Icon name='user' />
            Rectors
          </Link>
        </Menu.Item>
      </Menu>
};

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path={`/university`} component={() => University(univercityList)} />
        <Route path={`/city`} component={() => City(cityList)} />
        <Route path={`/administration`} component={Administration} />
        <Route component={Home} />
      </Switch>
      <NavMenu />
    </Router>
  );
}

export default App;
