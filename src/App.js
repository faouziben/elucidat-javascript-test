import React, { Component } from 'react';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Layout  from './components/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking';

class App extends Component {

  render() {
    return (
      <Layout>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/booking' component={Booking} />
      </Switch>
      </Layout>
        
    );
  }
}

export default App;
