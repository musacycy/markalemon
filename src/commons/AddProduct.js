import React, {Component} from 'react';

import {View, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
class AddProduct extends Component {
  render() {
    return (
      
<View style={{
            
            width: width * 0.41,
            height: height * 0.23,
            marginLeft: 10,
            borderWidth: 1,
            marginTop: 10, 
          }}>
            <Image source={this.props.source} style={{width: width * 0.41, height: height * 0.19}} key='productPic'></Image>
            <View style={{
             alignItems: 'center', width: width * 0.41, height: height * 0.04,flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image style={{flex: 14}} source={require('../img/add_cart.png')}></Image>
              <Text style={{flex: 86, textAlign: 'center'}}>Add Cart</Text>
            </View>
          </View> 
    );
  }
}

export default AddProduct;
