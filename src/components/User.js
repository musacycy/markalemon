import React, { Component } from 'react'
import { Text,Container,Button } from 'native-base'

export default class User extends Component {
    render() {
        return (
            <Container style={{justifyContent:'center',alignItems:'center'}}>
          
          <Text>Hello from Home Page</Text>
          <Button onPress={()=>this.props.navigation.navigate('Main')}>
            <Text>Go Main</Text>
          </Button>
          </Container>
        )
    }
}
