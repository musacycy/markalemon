import React, { Component } from 'react'

import {Router, Scene} from 'react-native-router-flux';


class changePage extends Component {
    render() {
        return (
    
            <Router>
        <Scene key="Root">
          <Scene key="Form" component={this.props.Page} initial hideNavBar/>
        </Scene>
      </Router>
        )
    }
}

export default changePage;