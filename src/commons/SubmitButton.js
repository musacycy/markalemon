import React, {Component} from 'react';
import {Button,Text} from 'native-base';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
class SubmitButton extends Component {
  render() {
    return (
      <Button success style={buttonStyle.container}>
        <Text>{this.props.Text}</Text>
      </Button>     
    );
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

export default SubmitButton;
