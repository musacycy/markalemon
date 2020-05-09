import React, { Component } from 'react'
import {Button,Text} from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
class GoogleLogin extends Component {
    render() {
        return (
            <Button light style={buttonStyle.container}>
            <FontAwesomeIcon icon={faGoogle} color='white' size={24} style={{marginLeft:5}}></FontAwesomeIcon>
            <Text style={{flex:8, textAlign:'center'}}>{this.props.Text}</Text>
        </Button>
        )
    }
}

const buttonStyle={
    container: {
    marginTop:10, 
    marginHorizontal:5, 
    borderRadius:5,
    alignItems:'center',
    justifyContent:'space-between'
    }
  };
export default GoogleLogin;