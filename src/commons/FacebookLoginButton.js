import React, {Component} from 'react';

import {View, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
class FacebookLoginButton extends Component {
  render() {
    return (
      <View style={styles.FacebookButtonStyle}>
        <View style={styles.FacebookButtoninStyle}>
          <Image source={require('../img/facebook_login.png')} />
          <Text style={{color: 'white'}}>{this.props.Text}</Text>
        </View>
      </View>
    );
  }
}
const styles = {
  FacebookButtonStyle: {
    width: width * 0.56,
    height: height * 0.05,
    marginTop: 10,
    borderRadius: 10,
  },
  FacebookButtoninStyle: {
    backgroundColor: '#3B5998',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    borderRadius: 10,
    alignItems: 'center',
    paddingRight: 20,
  },
};

export default FacebookLoginButton;
