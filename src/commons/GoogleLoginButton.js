import React, {Component} from 'react';

import {View, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
class GoogleLoginButton extends Component {
  render() {
    return (
      <View style={styles.GoogleButtonStyle}>
        <View style={styles.GoogleButtoninStyle}>
          <Image source={require('../img/Google_login.png')} />
          <Text style={{color: 'white'}}>{this.props.Text}</Text>
        </View>
      </View>
    );
  }
}
const styles = {
  GoogleButtonStyle: {
    width: width * 0.56,
    height: height * 0.05,
    marginTop: 10,
    borderRadius: 10,
  },
  GoogleButtoninStyle: {
    backgroundColor: '#8E8B8B',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 5,
    borderRadius: 10,
    paddingRight: 35,
  },
};

export default GoogleLoginButton;
