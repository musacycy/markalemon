import React, {Component} from 'react';

import {View, Text, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import AddProduct from '../commons/AddProduct.js';
const {width, height} = Dimensions.get('window');
class Category extends Component {
  render() {
    return (
      <View>
        <View style={{alignItems: 'center', width:width, height: height * 0.1}}>
        <Image source={require('../img/logo_main.png')} />
        </View>
        <View style={{
          width: width, 
          height: height * 0.05, 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderWidth: 0.5,
          }}>
          <Image style={{flex: 1}} source={require('../img/Line.png')}></Image>
          <Text style={{flex: 9, textAlign: 'center'}}>Category Name</Text>
        </View>
        <SafeAreaView>
          <ScrollView>
            <AddProduct source={require('../img/shoes.jpg')} />
          </ScrollView>
          </SafeAreaView>
        <View key='Footer'></View>
      </View>
    );
  }
}

export default Category;
