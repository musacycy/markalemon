import React, { Component } from 'react'
import {Button,Text} from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'


 class FbLogin extends Component {
    render() {
        return (
            <Button primary style={buttonStyle.container}>
                <FontAwesomeIcon icon={faFacebookF} color='white' size={24} style={{marginLeft:5}}></FontAwesomeIcon>
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
export default FbLogin;