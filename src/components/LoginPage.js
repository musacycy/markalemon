import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Image, Dimensions} from 'react-native';
import { faHome, faSearch, faUser,faShoppingBasket} from '@fortawesome/free-solid-svg-icons';

import { Container,Footer,FooterTab, Content,Form,Item,Label,Input} from 'native-base';
import SubmitButton from '../commons/SubmitButton.js';
import FbLogin from '../commons/FbLogin';
import GoogleLogin from '../commons/GoogleLogin';
import FooterMenu from '../commons/FooterMenu';
const {width, height} = Dimensions.get('window');

export default class LoginPage extends Component {
  render() {
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
            <SubmitButton Text="Sign in" />
            <FbLogin Text='Login with Facebook'></FbLogin>
            <GoogleLogin Text='Login with Google'></GoogleLogin>
         
          </Form>
         
        </Content>
        <Footer>
            <FooterTab style={{marginHorizontal:20, justifyContent: 'space-between', alignItems:'center'}}>
           
              <FooterMenu icon={faHome} size={24} color="orange" ></FooterMenu>
              <FooterMenu icon={faSearch} size={24} color="orange" ></FooterMenu>
              <FooterMenu icon={faShoppingBasket} size={24} color="orange" ></FooterMenu>
              <FooterMenu icon={faUser} size={24} color="orange"></FooterMenu>
            </FooterTab>
          </Footer>

      </Container>
    );
  }
}
