import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';
import Main from './components/Main';
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
