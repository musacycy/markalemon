import React, { Component } from 'react'
import {Button,Text} from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
 class FbLogin extends Component {
    render() {
        return (
            <Button light style={buttonStyle.container}>
                <FontAwesomeIcon icon={faFacebookSquare} color='blue' size={24} style={{backgroundColor:'white'}}></FontAwesomeIcon>
                <Text>{this.props.Text}</Text>
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
    justifyContent:'center'
    }
  };
export default FbLogin;