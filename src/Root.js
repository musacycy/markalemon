import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="Root">
          <Scene key="Form" component={LoginPage} initial hideNavBar/>
        </Scene>
      </Router>
    );
  }
}

export default Root;
