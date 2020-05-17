import React, { Component } from 'react';
import {Image, Dimensions} from 'react-native';
import { Container,Footer,FooterTab,Button, Content,Form,Item,Label,Input} from 'native-base';
import SubmitButton from '../commons/SubmitButton.js';
import FbLogin from '../commons/FbLogin';
import GoogleLogin from '../commons/GoogleLogin';
import { withNavigation } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';


const {width, height} = Dimensions.get('window');

 class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {index: 0}
  }
  
  switchScreen(index){
    this.setState({index: index})
  }

  render() {
    const homeColor =null;
    const searchColor =null;
    const basketColor =null;
    const userColor =null;
    
    switch(this.state.index){

      case 1:
    
      this.homeColor="orange";
      this.searchColor= null;
      this.basketColor= null;
      this.userColor= null;
        break;
      case 2:
      this.homeColor= null;
      this.searchColor= "orange";
      this.basketColor= null;
      this.userColor= null;
        break;
      case 3:
      this.homeColor= null;
      this.searchColor= null;
      this.basketColor= "orange";
      this.userColor= null;
        break;
      case 4:
      this.homeColor= null;
      this.searchColor= null;
      this.basketColor= null;
      this.userColor= "orange";
        break;
        case 5:
      this.homeColor= null;
      this.searchColor= null;
      this.basketColor= null;
      this.userColor= null;
        break;



    }
    return (
      <Container>
        <Content>
        <Image style={{width: width, height: height * 0.35}}  source={require('../img/slashbg1.png')}></Image>
        <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <SubmitButton  Text="Sign in" />
            <FbLogin Text='Login with Facebook'></FbLogin>
            <GoogleLogin Text='Login with Google'></GoogleLogin>
         
          </Form>
         
        </Content>
        <Footer>
        <FooterTab>
          <Button onPress={() =>{this.switchScreen(1); this.props.navigation.navigate('Main') }}>
          <FontAwesomeIcon icon={faHome} color={this.homeColor}></FontAwesomeIcon>
          </Button>
          <Button onPress={() =>{this.switchScreen(2); this.props.navigation.navigate('Search') }}>
          <FontAwesomeIcon icon={faSearch} color={this.searchColor}></FontAwesomeIcon>
          </Button>
          <Button onPress={() =>{this.switchScreen(3); this.props.navigation.navigate('Cart') }}>
          <FontAwesomeIcon icon={faShoppingBasket} color={this.basketColor}></FontAwesomeIcon>
          </Button>
          <Button onPress={() =>{this.switchScreen(4); this.props.navigation.navigate('User') }}>
          <FontAwesomeIcon icon={faUser} color={this.userColor}></FontAwesomeIcon>
          </Button>
        </FooterTab>
      </Footer>
      </Container>
    );
  }
}
export default withNavigation(LoginPage);