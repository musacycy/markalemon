import React, {Component} from 'react';

import {View, Text, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

const {width, height} = Dimensions.get('window');
class Main extends Component {
  renderOnSaleProduct(text) {
    return (
      
<View style={{
            
            width: width * 0.41,
            height: height * 0.23,
            marginLeft: 10,
            borderWidth: 1,
            marginTop: 10, 
          }}>
            <Image source={text} style={{width: width * 0.41, height: height * 0.19}} key='productPic'></Image>
            <View style={{
             alignItems: 'center', width: width * 0.41, height: height * 0.04,flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image style={{flex: 14}} source={require('../img/add_cart.png')}></Image>
              <Text style={{flex: 86, textAlign: 'center'}}>Add Cart</Text>
            </View>
          </View>
        
    );
  }
  render() {
    return (
      <View>
        <SafeAreaView style={{height: height}}>
          <ScrollView>
        <View style={styles.headerLeft}>
          <View style={{flex:5, marginTop:10}}>
            <Image source={require('../img/logo_main.png')} />
          </View>
          <View style={styles.headerRight}>
            <View style={styles.cart}>
              <Image source={require('../img/cart.png')} />
              <Text>Cart</Text>
            </View>
            <Text style={{flex:3}}>Sign in</Text>
          </View>
        </View>
        <View key='MenuBar' style={styles.menuBar}></View>
        <View key='Banner'style={{
          width: width,
          height: height * 0.32,
        }}><Image source={require('../img/banner.png')} style={{marginBottom: 10, marginTop: 20, backgroundColor: 'red'}}></Image>
        </View>
        <View key='onSale'>
          <Text style={{marginTop:5,marginLeft:5}}>On Sale</Text>
          <SafeAreaView>
          <ScrollView horizontal={true} style={{ marginLeft: 5,}}>
          {this.renderOnSaleProduct(require('../img/shoes.jpg'))}
          {this.renderOnSaleProduct(require('../img/shoes2.jpg'))}
          {this.renderOnSaleProduct(require('../img/shoes.jpg'))}
          {this.renderOnSaleProduct(require('../img/shoes.jpg'))}
          </ScrollView>
          </SafeAreaView>
          <SafeAreaView>
          <ScrollView horizontal={true} style={{ marginLeft: 5,}}>
          {this.renderOnSaleProduct(require('../img/shoes.jpg'))}
          {this.renderOnSaleProduct(require('../img/shoes2.jpg'))}
          {this.renderOnSaleProduct(require('../img/shoes.jpg'))}
          {this.renderOnSaleProduct(require('../img/shoes.jpg'))}
          </ScrollView>
          </SafeAreaView>
          <SafeAreaView>
          <ScrollView horizontal={true} style={{ marginLeft: 5,}}>
          {this.renderOnSaleProduct(require('../img/shoes.jpg'))}
          {this.renderOnSaleProduct(require('../img/shoes2.jpg'))}
          {this.renderOnSaleProduct(require('../img/shoes.jpg'))}
          {this.renderOnSaleProduct(require('../img/shoes.jpg'))}
          </ScrollView>
          </SafeAreaView>
        </View>
        </ScrollView>
        </SafeAreaView>

        <View key='Footer'></View>
      </View>
    );
  }
}
const styles = {
  menuBar: {
    marginTop: 10,
    backgroundColor: '#D8D8D8',
    width: width,
    height: height * 0.05,
  },
  cart: {
    flex: 7,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerLeft: {
    justifyContent:'center',
    flexDirection:'row',
    width: width,
    height: height * 0.1,
  },
  headerRight: {
    flex: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
};

export default Main;
