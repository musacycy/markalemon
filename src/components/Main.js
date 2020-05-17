import React, { Component } from 'react'
import { Text, Button, Container } from 'native-base'
import { withNavigation } from 'react-navigation';

 class Main extends Component {
    render() {
        return (
          <Container style={{justifyContent:'center',alignItems:'center'}}>
          
          <Text>Hello from Home Page</Text>
          <Button onPress={()=>this.props.navigation.navigate('Search')}>
            <Text>Go Search</Text>
          </Button>
          </Container>
        )
    }
}
export default withNavigation(Main);