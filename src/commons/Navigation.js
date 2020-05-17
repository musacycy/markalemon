import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../components/LoginPage';
import Main from '../components/Main';
import Search from '../components/Search';
import Cart from '../components/Cart';
import User from '../components/User';

const Stack = createStackNavigator();

 class Navigation extends Component {
     render() {

        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="LoginPage" component={LoginPage} />
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="User" component={User} />
            </Stack.Navigator>
          </NavigationContainer>
        );

        
      }
}


export default Navigation;